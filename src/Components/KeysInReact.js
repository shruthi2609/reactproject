export function Display(props){
 const listitems=   props.interest.map((item,id)=><li key={id}>{item}</li>)
 return(
     <ul>{listitems}</ul>
 )
}
