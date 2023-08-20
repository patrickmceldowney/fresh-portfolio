import { gql } from 'graphql-request'
import { client } from '$lib/graphql-client'

interface Project {
  image: {
    url: string
  }[];
  name: string;
  slug: string;
  description: string;
}


export async function load(){
  

  const query = gql`
    query GetProject {
      projects {
        name
        slug
        description
        demo
        sourceCode
        image {
          url
        }
      }
    }
  `

  const projects: Project[] = await client.request(query)

  return {
      projects
  }
}