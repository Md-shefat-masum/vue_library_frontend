<template>
	<div>
		<div class="row">
			<div class="col-12">
				<div class="card">
					<div class="card-header">
						<h4>Entry List</h4>
					</div>
					<div class="card-body table-responsive">
						<table
							class="
								table table-bordered table-striped
								text-center
							"
						>
							<thead>
								<tr>
									<th>#</th>
									<th>Image</th>
									<th>Name</th>
									<th>User</th>
									<th>Time</th>
									<th>Date</th>
									<th>Return Date</th>
									<th class="text-center" style="width: 20%">
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								<tr
									v-for="entry in book_entries.data"
									:key="entry.id"
								>
									<td>{{ entry.id }}</td>
									<td>
										<div v-if="entry.book_image">
											<img
												v-if="
													entry.book_image?.split(
														'/'
													)[0] === 'upload'
												"
												:src="`${get_server_url}/${entry.book_image}`"
												style="height: 70px"
												alt="image"
											/>
											<img
												v-else
												:src="`http://${entry.book_image}`"
												style="height: 70px"
												alt="image"
											/>
										</div>
										<img
											v-else
											src="/assets/images/product/1.png"
											alt="image"
										/>
									</td>
									<td>{{ entry.book_name }}</td>
									<td>{{ entry.user_name }}</td>
									<td>{{ entry.time }}</td>
									<td>{{ entry.date }}</td>
									<td>{{ entry.return_date }}</td>
									<td>
										<div class="d-flex justify-content-end">
											<a
												href="#"
												class="
													btn btn-sm btn-primary
													mx-1
												"
												>New Entry</a
											>
											<a
												href="#"
												class="
													btn btn-sm btn-warning
													mx-1
												"
												>Edit</a
											>
											<a
												href="#"
												class="
													btn btn-sm btn-danger
													mx-1
												"
												>Delete</a
											>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="card-footer">
						<pagination
							v-model="page"
							:options="pagination_option"
							:records="total"
							:per-page="per_page"
							@paginate="getData"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	export default {
		name: "bookList",
		data: function () {
			return {
				book_entries: {},
				page: 1,
				per_page: 0,
				total: 0,
				pagination_option: {
					edgeNavigation: true,
				},
			};
		},
		created: function () {
			this.getData();
		},
		methods: {
			getData: function (page = 1) {
				let url = `/book-entry/list?page= ${page}`;
				window.axios.get(url).then((res) => {
					console.log(res.data);
					this.book_entries = res.data;
					this.total = res.data.total;
					this.per_page = res.data.per_page;
				});
			},
		},
		computed: {
			...mapGetters(["get_server_url"]),
		},
	};
</script>

<style></style>
