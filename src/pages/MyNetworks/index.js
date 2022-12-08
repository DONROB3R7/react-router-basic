import React from 'react'
import UserComponent from '../../components/UserComponent';
import '../../../src/App.css';

export default function MyNetwork() {
  // useState to hold value from Random user
  const [user, setUser] = React.useState([]);

  // Loading 
  const [Loading, setLoading] = React.useState(false);

  // Fetching 1000 random users
  React.useEffect(() => {
    fetch('https://randomuser.me/api/?results=1000')
    .then( data => {
       data.json().then(dataUser => {
        setUser(dataUser);
        setLoading(true);
       })
    })
    .catch(error => console.error(error));
    
  } , [])


    // function componentRender() {
      
    //   let dataStore;
    //   console.log(user.results);
    //   user.results.forEach(element => {
    //     dataStore += 2 ;
    //   });
    //     console.log(dataStore);
    //    return dataStore;
    // }

    // user.results.forEach(element => {
    //   < UserComponent  data={element}/>
    // });


if(Loading) {
  return(
  <>
    <h1>MyNetwork Page</h1>
    {/* {componentRender()} */}
    <div className='wrapper-box'>
      { user.results.map((element, index) => {
      
      return(
        <>
            <UserComponent data={element} />
        </>
      );
      })}
    </div>
  </>
  );
} else {
  return(
    <>
      <h1>MyNetwork Page</h1>
      <p>Lodding...</p>
    </>
    );
}
}
