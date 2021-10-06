<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4>Book List</h4>
          </div>
          <div class="card-body table-responsive">
            <table class="table table-bordered table-striped text-center">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Book Name</th>
                  <th>Author</th>
                  <th>Section</th>
                  <th class="text-center" style="width: 20%">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in 5" :key="i">
                  <td>1</td>
                  <td>
                    <img src="/assets/images/product/1.png" alt="image" />
                  </td>
                  <td>Book</td>
                  <td>Mr.Stark</td>
                  <td>B Block</td>
                  <td>
                    <div class="d-flex justify-content-end">
                      <a href="#" class="btn btn-sm btn-primary mx-1"
                        >New Entry</a
                      >
                      <a href="#" class="btn btn-sm btn-warning mx-1">Edit</a>
                      <a href="#" class="btn btn-sm btn-danger mx-1">Delete</a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "admin-base",
  created: function () {
    this.getData();
  },
  methods: {
    getData: function () {
      window.axios.get("/book-list").then((res) => {
        console.log(res.data);
      });
    },
  },
};
</script>

<style></style>
