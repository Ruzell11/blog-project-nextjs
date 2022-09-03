// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {GraphQLCLient , gql} from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphCmsToken = process.env.GRAPHCMS_TOKEN

export default async function comments(req, res) {
  console.log(graphCmsToken)
  const{ name , email , slug , comment} = req.body
  const graphqlClient = new GraphQLCLient(graphqlAPI , {
    headers:{
      authorization:`Bearer ${graphCmsToken}`
    }
  })
  const query = gql `
  mutation CreateComment($name : String! , $email : String! , $comment: String! , $slug: String!){
    createComment(data:{name:$name , email:$email , comment:$comment , post:{connect:{slug:$slug}}})
    {id}
  }
  `
  try{
    const result = await graphqlClient.request(query , req.body)
    return res.status(200).send(result) 
  }catch(error){
    console.log(error)
  }
 
}
