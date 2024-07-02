import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];




export default function App() {
  const [selectValue, setSelectValue] = useState("Clark");
  const [partner,setPartner] = useState("You");
  const [val, setVal] = useState(0);
  const [splitClicked, setSplitClicked] = useState(false);
  const [addFriend, setAddFriend] = useState(true);
  const [friendForm, setFriendForm] = useState(false);

  return (
    <div className="app">
       <div className="sidebar">
         <FriendList val={val}  selectValue= {selectValue} setSelectValue={setSelectValue} partner={partner} splitClicked={splitClicked} setSplitClicked={setSplitClicked}/>

       {
          addFriend &&  <button className="button" onClick={()=>{setFriendForm(true); setAddFriend(false)}}>Add Friend</button>
       }
         
         {
          friendForm && <AddFriend setFriendForm={setFriendForm} setAddFriend={setAddFriend}/>
         }
         
       </div>
      {
        splitClicked &&
          <SplitBill val={val} setVal={setVal} selectValue= {selectValue} setSelectValue={setSelectValue} setPartner={setPartner} partner={partner} setSplitClicked={setSplitClicked}/> 
      }
       
    </div>
  )
}

function FriendList({selectValue, setSelectValue, partner, val, setSplitClicked}) {
  const friendList = initialFriends;
  return <ul> 
     {
     friendList.map((friend)=> (<Friend friend={friend} key={friend.id} val={val} selectValue= {selectValue} setSelectValue={setSelectValue} partner={partner} setSplitClicked={setSplitClicked}/>))
     }
  </ul>
}

function Friend({friend,selectValue, setSelectValue, partner, val, setSplitClicked}) {
  
     return <>
     
     <li>
          <img src={friend.image} alt="friend_image"/>
          <h3>{friend.name}</h3>
          <button className="button" onClick={()=>{setSelectValue(friend.name); setSplitClicked(true)}}>Select</button>
          {/* {console.log(selectValue)} */}


          {   friend.name === selectValue &&
             (partner ==="You" ? <p>{friend.name} owe you ${val} </p> : <p> you owe {friend.name} ${val} </p>)
          }     
     </li> 
     </>
}

function AddFriend({setFriendForm, setAddFriend}) {
   return  <div>
      <form className="form-add-friend">
    
              <label>Friend name</label>
              <input type="text"/>
              <label>Image URL</label>
              <input type="text"/>

             <button className="button">Add</button>
       </form>
       <button className="button" onClick={()=>{setFriendForm(false); setAddFriend(true)}}>Close</button>
   </div>
   
}

function SplitBill({selectValue, setSelectValue, partner, setPartner, setVal, val, setSplitClicked}) {
  const [bill, setBill] = useState(0);
  const [yourExp, setYourExp] = useState(0);

  

  function handlebill(value) {
      setVal(value);
      console.log(val);
  }
 
  function handleSubmit(e) {
      e.preventDefault();
      const formData = new FormData(e.target)
       const value = formData.get("inputName");
      setVal(value)
      setSplitClicked(false);

  }

   return <form className="form-split-bill" onSubmit={handleSubmit}>
  {/* {console.log(selectValue)} */}
      <h2>SPLIT A BILL WITH {selectValue}</h2>
          <label>Bill value</label>   
          <input type="text" value={bill} onChange={(e)=>setBill(Number(e.target.value))}/>

          <label>Your expense</label> 
          <input type="text" value={yourExp} onChange={(e)=>setYourExp(Number(e.target.value))}/>
  
          <label>{selectValue} expense</label>
          <input type="text" value={bill-yourExp} name="inputName"/>
        
          <label>Who is paying the bill?</label>  
            <select onChange={(e)=>setPartner(e.target.value)}>
              {/* {console.log(partner)} */}
               <option value="You">You</option>
               <option value={selectValue}>{selectValue}</option>
            </select>

          <button className="button" type="submit">Splitbill</button>
      </form>
}