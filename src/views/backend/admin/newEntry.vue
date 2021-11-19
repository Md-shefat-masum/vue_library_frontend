<template>
	<div>
		<div class="row justify-content-center mt-4">
			<div class="col-sm-12 col-md-8 col-lg-9">
				<div class="card">
					<div class="card-header">
						<h4>New Entry</h4>
					</div>
					<div class="card-body">
						<form action="" @submit.prevent="saveEntry">
							<div class="form-group">
								<label for="">User Name</label>
								<Select2
									class="form-control"
									v-model="myValue"
									:options="myOptions"
									:settings="{
										multiple: false,
										placeholder: `search user and select`,
										allowClear: true,
									}"
									@change="myChangeEvent($event)"
									@select="mySelectEvent($event)"
								/>
							</div>
							<div class="form-group">
								<label for="">Book Name</label>
								<Select2
									class="form-control"
									v-model="myBooksValue"
									:options="book_list_option"
									:settings="{
										multiple: true,
										placeholder: `search book and select`,
										allowClear: true,
									}"
									@change="myBookChangeEvent($event)"
									@select="myBookSelectEvent($event)"
								/>
							</div>
							<div class="form-group">
								<label for="">Time</label>
								<input type="time" v-model="time" class="form-control" />
							</div>
							<div class="form-group">
								<label for="">Date</label>
								<input type="date" v-model="date" class="form-control" />
							</div>
							<div class="form-group">
								<label for="">Return Date</label>
								<input type="date" v-model="return_date" class="form-control" />
							</div>
							<div class="form-group">
								<button type="submit" class="btn btn-secondary">
									Submit
								</button>
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
		data: function () {
			return {
				myValue: "",
				myBooksValue: "",
				// myOptions: ["op1", "op2", "op3"],
				myOptions: [],
				book_list_option: [],
                time:'',
                date: '',
                return_date:'',
			};
		},
        created: function(){
            this.getData();
        },
		methods: {
			getData: function () {
                window.axios.get('/user/user-list-for-select2')
                    .then(res=>{
                        this.myOptions = res.data;
                    })
                window.axios.get('/book-list/book-list-for-select2')
                    .then(res=>{
                        console.log(res.data);
                        this.book_list_option = res.data;
                    })
            },
			myChangeEvent: function () {
				// console.log(val);
			},
			mySelectEvent: function () {
				// console.log({ id, text }, this.myValue);
			},

            myBookChangeEvent: function () {
				// console.log(val);
			},
			myBookSelectEvent: function () {
				// console.log({ id, text }, this.myBooksValue);
			},
            saveEntry: function(){
                let form_data = {
                    user_id: this.myValue,
                    book_ids: this.myBooksValue,
                    date: this.date,
                    return_date: this.return_date,
                    time: this.time,
                }

                window.axios.post('/book-entry/create',form_data)
                    .then(res=>{
                        console.log(res.data);
                        this.myBooksValue = [];
                    })
            }
		},
	};
</script>

<style></style>
