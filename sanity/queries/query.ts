
export const previewProjectsQuery = `*[_type == "project"][0...4]{
  title,
  role,
  about,
  image,
  github,
  site
}`;

export const allProjectsQuery = `*[_type == "project"]{
  title,
  role,
  about,
  image,
  github,
  site
}`;

export const profileQuery = `*[_type == "profile"][0]{
  name,
  position,
  image{
    asset->{
      _ref,
      url,
      metadata{dimensions{width,height,aspectRatio}}
    }
  },
  bio
}`;
