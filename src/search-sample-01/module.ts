// Ducks ファイル構成に倣い、Reducer や ActionDispatcher を単一ファイルにまとめておく
import * as Im from 'immutable';
import {ActionTypes, IAction, IContent, ISearchSample01State, ISearchSpec} from './Interfaces';

export const reducer = async (state: ISearchSample01State, action: IAction) => {
  switch (action.type) {
    case ActionTypes.SEARCH:
      // TODO あとで Model 作ってロジックを移す
      // 非同期処理をどうするか？

      const {word: searchWord} = action.payload;

    // axios でのアクセスは不可だった
    // レスポンスヘッダに Access-Control-Allow-Origin が返ってこないため
    // const api = 'http://kosoku.jp/api/route.php?f=柏&t=土浦北&c=普通車';
    // const response: AxiosResponse = await axios.get(api);

    // jsonp によるアクセスは、レスポンスが返ってくる前に
    // 次に進んでしまう
    // const jsonp = require('jsonp');
    // const api = 'http://kosoku.jp/api/route.php?f=柏&t=土浦北&c=普通車';
    // const callback = (err, data) => {
    //   console.log(data);
    // }
    // jsonp(api, null, callback);

    // どうも、redux 内で非同期を行うには middleware 使うのがセオリーらしい
    // また、uryyyyyyy 氏のように middleware 不要論を唱える人もいて、まだセオリーが確立していない。
    // なるべく middleware とか入れたくないので、 uryyyyyyy 方式で試したい

    // ReduxでのMiddleware不要論 - Qiita
    // fetch によるデータ取得
    // fetch も結局は Access-Control-Allow-Origin を期待しているので axios と同じエラーになる
    // const api = 'http://kosoku.jp/api/route.php?f=柏&t=土浦北&c=普通車';
    // const opts = {
    //   method: 'GET',
    // };
    // try {
    //   const response: Response = await fetch(api, opts);
    //   if (response.status === 200) {
    //     // const json: JsonObject = await response.json();
    //     console.log(response.json());
    //   } else {
    //     throw new Error(`illegal stats code: ${response.status}`);
    //   }
    // } catch (err) {
    //   console.error(err.message);
    //   throw new Error('fetch で例外');
    // } finally {
    //   // this.dispatch({type: RETCH_REQUEST_FINISH});
    // }

    // fetch を jsonp に対応させたもの
    // エラーになる（Uncaught SyntaxError: Unexpected token < )
    //
    // const fetchJsonp = require('fetchJsonp');
    // require('es6-promise').polyfill();
    // try {
    //   const response = await fetchJsonp('http://kosoku.jp/api/route.php?f=柏&t=土浦北&c=普通車');
    //   console.log(response.json());
    // } catch (err) {
    //   console.error(err.message);
    // }
    // return state;

    // 上記は async/await 版で、こっちは元のサンプルコード
    // fetchJsonp('http://kosoku.jp/api/route.php?f=柏&t=土浦北&c=普通車')
    //   .then(function(response) {
    //     const parser = cheerio.load(response.json(), { xmlMode: true}) ;
    //
    //     return response.json<any>();
    //   }).then(function(json) {
    //   console.log('parsed json', json)
    // }).catch(function(ex) {
    //   console.log('parsing failed', ex)
    // })

    // 上記いずれの書き方でもダメ
    // → Same Origin Policy 回避のため jsonp を使ったが、返ってくるのが XML なのでそもそもダメらしい
    //    javascript - Ajax call using jsonp not working, "Uncaught SyntaxError: Unexpected token" - Stack Overflow
    //    http://stackoverflow.com/questions/30199465/ajax-call-using-jsonp-not-working-uncaught-syntaxerror-unexpected-token
    //    にもあるように、JSONP は、言わば executable script を返す仕組みなので XML が返されてもしょうがない
    //    ざっくり言えば、xml 文書をページ内に埋め込もうとしてるからエラーになる。
    //    また、GET しかできないので、更新系の WebApi は不可

    // 結局、ブラウザが自分で取りに行くのではなく、オリジンサーバーがバックエンドで外部APIアクセスして、
    // それをレスポンスするしかない。あくまでもブラウザは単一のサーバー相手にする。
    // となると、自前のApiサーバないしプロキシ(ここでいうプロキシとはApサーバほど大げさ出ないリクエストを
    // 単に代行する簡易スクリプトだけのApiサーバー)を立てる必要がある。
    // そこで外部APIアクセスしてデータを取得し、必要なら 例のヘッダをつけてレスポンスする
    // 例えばここから自前の AWS ラムダにリクエストし、そのラムダ経由でデータを取得する
    // ただし、以下にあるように、この方法でも認証にクッキーが使用されている場合はうまくいかないらしい
    //  初心者歓迎！jQueryでJSONPを使ってAjaxする方法 - WPJ
    //  https://www.webprofessional.jp/jsonp-examples/

    // const searchResult: IContent = {
    //   id: 0,
    //   desc: '',
    // };
    //
    // return mergeSearchResults(state, searchResult);
    default:
      return state;
  }
};

const mergeSearchResults = (currentState: ISearchSample01State, searchResult: IContent): ISearchSample01State => {
  // FIXME fromJS してから toJS するのダルい
  // Store でうまく immutable 化しときたいがやり方が分からん
  const current = Im.fromJS(currentState);

  let nextSearchResult;

  if (currentState.searchResults) {
    nextSearchResult = currentState.searchResults.concat(searchResult);
  }
  else {
    nextSearchResult = searchResult;
  }

  const next = current.merge({
    // push ではなく concat で非破壊追加してるが、本来そんなことを気にせず
    // Immutable を使って操作を書きたい
    searchResults: nextSearchResult,
  });
  return next.toJS();
};

export class ActionDispatcher {
  private dispatch: (action: any) => any;

  constructor(dispatch: (action: any) => any) {
    this.dispatch = dispatch;
  }

  public search = (searchSpec: ISearchSpec) => {
    this.dispatch({type: ActionTypes.SEARCH, payload: searchSpec});
  }
}

export default reducer;
