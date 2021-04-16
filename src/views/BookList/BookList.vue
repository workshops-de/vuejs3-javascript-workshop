<template>
  <label for="search">🔎 </label>
  <input id="search" v-model="search" placeholder="Search for books by title" />

  <table>
    <BookListItem
      v-for="book in filteredBooks"
      :key="book.isbn"
      v-bind="book"
      @read="readBook(book)"
    />
  </table>
</template>

<script>
import BookListItem from "@/components/BookListItem/BookListItem.vue";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("books");

export default {
  name: "BookList",
  components: {
    BookListItem,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapState(["books"]),
    filteredBooks() {
      return this.books.filter((book) => book.title.includes(this.search));
    },
  },
  methods: {
    ...mapActions({
      setBooks: "SET_BOOKS",
      getBooks: "GET_BOOKS",
    }),
    readBook(book) {
      this.setBooks({
        books: [
          ...this.books.map((bookEntry) => {
            if (bookEntry.isbn === book.isbn) {
              return {
                ...bookEntry,
                read: true,
              };
            }
            return bookEntry;
          }),
        ],
      });
    },
    async updateBooks() {
      await this.getBooks();
    },
  },
  created() {
    this.updateBooks();
  },
};
</script>

<style lang="scss">
$grey-color: #dddddd;

table {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    border: 1px solid $grey-color;
    padding: 8px;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4caf50;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: $grey-color;
  }
}
</style>
