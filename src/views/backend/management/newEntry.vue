<template>
  <div>
    <div class="row justify-content-center mt-4">
      <div class="col-sm-12 col-md-8 col-lg-9">
        <div class="card">
          <div class="card-header">
            <h4>New Entry</h4>
          </div>
          <div class="card-body">
            <form action="">
              <div class="form-group">
                <label for="">User Name</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label for="">Book Name</label>
                <select name="" class="form-control">
                  <option value="">book1</option>
                  <option value="">book1</option>
                </select>
              </div>
              <div class="form-group">
                <label for="">Time</label>
                <input type="time" class="form-control" />
              </div>
              <div class="form-group">
                <label for="">Date</label>
                <input type="date" class="form-control" />
              </div>
              <div class="form-group">
                <label for="">Return Date</label>
                <input type="date" class="form-control" />
              </div>
              <div class="form-group">
                <button type="button" class="btn btn-secondary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "new-entry",
  methods: {
    getData: function () {},
  },
};
</script>

<style></style>
