import {gql, useQuery} from "@apollo/client";

// 客户端
const GET_STUDENTS = gql`
  query Query {
    teachers {
      name
      age
      students {
        name
        id
      }
  }
`

function main() {
  const {loading,error,data} = useQuery(GET_STUDENTS)

  console.log(loading,error,data)
}

main()