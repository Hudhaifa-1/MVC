import axios from 'axios'

export default{
    async fetchUser (){
        return await axios.get('your backend endpoint hussien')
    }
}