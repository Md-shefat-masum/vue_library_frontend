<template>
    <div>
        <div v-if="get_check_auth_status">
            <dashboard></dashboard>
        </div>

        <div v-else>
            <router-view />
        </div>
        
    </div>
</template>

<script>
import dashboard from './views/backend/dashboard.vue';
import {mapGetters, mapMutations} from 'vuex';
export default {
  components: { dashboard },
    data: function(){
        return {

        }
    },
    created: function(){
        this.chech_auth_role();
        // console.log(this.get_check_auth_status);
    },
    updated: function(){
        console.log(this.get_check_auth_status);
        console.log(this.get_auth_role_name);
        this.chech_auth_role();
    },
    methods: {
        // ...mapActions(['']),
        ...mapMutations([
            'set_logout',
        ]),
        chech_auth_role: function(){
            if(this.get_check_auth_status){
                if(this.get_auth_role_name == 'admin'){
                    this.$router.replace({name:'admin'});

                }else if(this.get_auth_role_name == 'student'){
                    this.$router.replace({name:'student'});

                }else if(this.get_auth_role_name == 'management'){
                    this.$router.replace({name:'management'});
                    
                }else{
                    this.set_logout();
                    this.$router.replace({name:'login'});
                }
            }else{
                this.$router.replace({name:'login'});
            }
        }
    },
    computed: {
        ...mapGetters([
            'get_check_auth_status',
            'get_auth_role_name',
        ])
    }
};
</script>

