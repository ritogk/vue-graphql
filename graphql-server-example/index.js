// apolloServerはGraphQLのスキーマを定義する際に使う。
const { ApolloServer, gql } = require('apollo-server');

// 木構造に紐づくデータデータ
const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

// スキーマ
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
    book(author: String!): Book
  }
`;

// GraphQLにアクセスがあった時に返す値
const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args) => {
      let book = books.find((book) => book.author === args.author)
      return book
    }
  },
};

// サーバー設定
const server = new ApolloServer({ typeDefs, resolvers});

server.listen(8000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});