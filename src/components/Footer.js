import React from 'react';

const FooterProperties = {
  email: {
    url: "mailto:kosta@fastmail.com",
    title: "kosta@fastmail.com"
  },
  drupal: {
    url: "https://drupal.org/u/kostajh",
    title: "Drupal.org"
  },
  github: {
    url: "https://github.com/kostajh",
    title: "GitHub"
  },
  atletico: {
    url: "https://www.durhamatletico",
    title: "Durham Atlético"
  }
};

const Footer = () => (
  <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
    <small className="f6 db tc">Contact: <a className="dib ph2 link mid-gray dim" href={FooterProperties.email.url}>{FooterProperties.email.title}</a></small>
    <div className="tc mt3">
      <a href={FooterProperties.drupal.url} title={FooterProperties.drupal.title} className="f6 dib ph2 link mid-gray dim">{FooterProperties.drupal.title}</a>
      <a href={FooterProperties.github.url}  title={FooterProperties.github.title} className="f6 dib ph2 link mid-gray dim">{FooterProperties.github.title}</a>
      <a href={FooterProperties.atletico.url} title={FooterProperties.atletico.title} className="f6 dib ph2 link mid-gray dim">{FooterProperties.atletico.title}</a>
    </div>
  </footer>

);

export default Footer;
