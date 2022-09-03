import { request, gql } from 'graphql-request'
  

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPost = async () => {
  const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              catergories {
                name
                slug
              }
            }
          }
        }
      }
      `
  const result = await request(graphqlAPI, query)
  return result.postsConnection.edges;
}

export const getPostDetails = async (slug) => {
  const query = gql`
    query getPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        featuredImage {
          url
        }
        author{
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        catergories {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getRecentPost = async () => {
  const query = gql`
  query GetPostDetails(){
    posts(
      orderBy:createdAt_ASC
      last:3
      ){
        title
        featuredImage{
          url
        }
        createdAt
        slug
      }
  }
  `
  const result = await request(graphqlAPI, query)
  return result.posts;
}


export const getSimilarPosts = async (catergories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $catergories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {catergories_some: {slug_in: $catergories}}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, catergories });

  return result.posts;
};


export const getCatergories = async () => {
  const query = gql`
  query GetCatergories{
    catergories {
      name
      slug
    }
  }`
  const result = await request(graphqlAPI, query)
  return result.catergories;
}


export const submitComment = async (obj) => {
  const result = await fetch('/api/comments' , {
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(obj),
  });
  return result.json();
}


export const getComments = async (slug) => {
  const query = gql`
  query GetComments($slug:String!){
    comments(where:{post:{slug:$slug}}){
      name
      createdAt
      comment

    }
  }`
  const result = await request(graphqlAPI, query , {slug})
  return result.comments;
}
