<script setup>
  import { useQuery } from "@vue/apollo-composable"
  import gql from "graphql-tag"
  // え、戻り値の型はないの？
  const { result } = useQuery(gql`
    query {
      books {
        title
        author
      }
    }
  `)
</script>

<template>
  <h1>Fetchを利用したGraphQLへのアクセス</h1>
  <ul v-if="result && result.books">
    <li v-for="(book, index) in result.books" :key="index">
      {{ book.title }}/{{ book.author }}
    </li>
  </ul>
</template>