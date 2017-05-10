import React from 'react';

function RenderTagline(props) {
  const LinkProperties = props.links;
  return (
    <div>
      {LinkProperties.map(function (property, index) {
      return (
        <a key={property.type} className="f6 gray ph2 dib ttu tracked link" href={property.url}>
          {property.title}
        </a>
      );
      })}
    </div>
  );
}

class Tagline extends React.Component {

  render() {
    const LinkProperties = [
      {
        type: "about",
        url: "/about",
        title: "About"
      },
      {
        type: "email",
        url: "mailto:kosta@fastmail.com",
        title: "Email"
      },
      {
        type: "drupal",
        url: "https://drupal.org/u/kostajh",
        title: "Drupal.org"
      },
      {
        type: "github",
        url: "https://github.com/kostajh",
        title: "GitHub"
      },
      {
        type: "cv",
        url: "https://stackoverflow.com/cv/kostajh",
        title: "CV"
      },
      {
        type: "atletico",
        url: "https://www.durhamatletico.com/about",
        title: "Durham Atlético"
      }
    ];

    return(
      <div>
        <RenderTagline links={LinkProperties} />
      </div>
    );
  }
}

export default Tagline;
