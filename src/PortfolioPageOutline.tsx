import * as React from 'react';

interface IProps {
  title: string;
  link: {
    href: string,
    title: string,
  };
  desc: string;
  children?: any;
}

const PortfolioPageOutline = (props: IProps) => (
  <div>
    <div>
      <h2>{props.title}</h2>
      <p>概要：{props.desc}</p>
      <a href={props.link.href} target="_blank">{props.link.title}</a>
    </div>
    <br />
    {props.children}
  </div>
);

export default PortfolioPageOutline;
