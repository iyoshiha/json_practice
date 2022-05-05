
export var userData = [
    {
        id:1,
        name:'Takuya Tejima',
        description:'south asian software engineer'
    },
    {
        id:2,
        name:'Yohei Noda',
        description:'front-end engineer'
    },
]


export var UserDetail ={ 
    template: '#user-detail',
    data:function() {
        return {
            loading:false,
            user:null,
            error:null,
        }
    },
    created:function(){
        this.fetchData();
    },
    watch:{
        '$route':'fetchData()'
    },
    methods:{
        fetchData:function(){
            this.loading = ture
            getUser(this.$route.params.userId, (function(err,user){
                this.loading = false
                if (err) {
                    this.error = err.toString()
                }else{
                    this.user = user
                }
            }).bind(this))
        }
    }
}

    export var UserList = {
        template:'#user-list',
        data:function(){
            return {
                loading:false,
                users:function() {return []},
                error:null
            }
        },
        created:function() {
            this.fetchData()
        },
        watch:{
            '$route':'fetchData'
        },
        methods:{
            fetchData:function(){
                this.loading = true
                getUsers((function(err,users){
                    this.loading = false
                    if(err){
                        this.error = err.toString()
                    }else{
                        this.users = users
                    }
                }).bind(this)) // bind なにしてる
            }
        }
    }

    export var UserCreate = {
    template:'#user-create',
    data:function() {
        return {
            sending:false,
            user:this.defaultUser(),
            error:null
        }
    },


}