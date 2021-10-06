<template>
  <div>
    <div class="row justify-content-center mt-4">
      <div class="col-sm-12 col-md-8 col-lg-9">
        <div class="card">
          <div class="card-header">
            <h4>Book Entry</h4>
          </div>
          <div class="card-body">
            <form
              action=""
              id="book_form"
              @submit.prevent="save_book"
              enctype="multipart/form-data"
            >
              <div class="form-group">
                <label for="">Book Name</label>
                <input type="text" name="name" class="form-control" />
              </div>
              <div class="form-group">
                <label for="">Author</label>
                <input type="text" name="author" class="form-control" />
              </div>
              <div class="form-group">
                <label for="">Section</label>
                <input type="text" name="section" class="form-control" />
              </div>
              <div class="form-group">
                <label for="">Image</label>
                <input type="file" name="image" class="form-control" />
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-secondary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "new-entry",
  data: function () {
    return {
      id: 0,
      url: "/book-list/store",
    };
  },
  created: function () {
    console.log(this.$route.params.id);
    this.id = parseInt(this.$route.params.id);
    if (this.id > 0) {
      this.get_book();
      this.url = "/book-list/update";
    }
  },
  methods: {
    get_book: function () {
      window.axios.get("/book-list/get/" + this.id).then((res) => {
        console.log(res.data);
        for (const key in res.data) {
          if (Object.hasOwnProperty.call(res.data, key)) {
            const element = res.data[key];
            if (key != "image") {
              window.$(`input[name="${key}"`).val(element);
            }
          }
        }
      });
    },
    save_book: function () {
      let form_data = new FormData(document.getElementById("book_form"));
      if (this.url === "/book-list/update") {
        form_data.append("id", this.id);
      }
      window.axios
        .post(this.url, form_data)
        .then((res) => {
          console.log(res.data);
          this.$router.push({ name: "bookList" });
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
  computed: {
    ...mapGetters(["get_server_url"]),
  },
};
</script>
