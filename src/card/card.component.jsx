import './card.styles.css';


// This is also fine but this is the basic version of destructuing 
// ******* This is easier to read
// const card  = ({monster}) => {
// const {name, email, id} = monster


// this is advanced version of destructuring 
const card  = ({monster:{name, email, id}}) => {


        return(
        <div className='card-container' key = {id}>
                <img src = {`https://robohash.org/${id}?set=set4&`} alt = {`Profilep pic of ${name}`}/>
                    <h2>{name}</h2>
                    <p>{email}</p>
            </div>
    )

}
// class card extends Component{
//     render(){
//         const {name, email, id} = this.props.monster;
//         return(
            
//         )
//     }
// }
export default card;
