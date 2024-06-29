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
  return (
    <div className="app">
       <div className="sidebar">
         <FriendList/>
         {/* <button className="button">Add Friend</button> */}
         <AddFriend/>
       </div>
       <SplitBill/>
    </div>
  )
}

function FriendList() {
  const friendList = initialFriends;
  return <ul> 
     {
     friendList.map((friend)=> (<Friend friend={friend} key={friend.id}/>))
     }
  </ul>
}

function Friend({friend}) {
     return <li>
          <img src={friend.image}/>
          <h3>{friend.name}</h3>
          <button className="button">Select</button>
     </li>
    
}

function AddFriend() {
   return  <div>
      <form>
             <div>
              Friend name
              <input type="text"/>
              </div><br/>
             <div>
              Image URL
              <input type="text"/>
              </div><br/>
             <button className="button">Add</button>
            
       </form>
       <button className="button">Add</button>
   </div>
   
}

function SplitBill() {
   return <form>
      <h2>SPLIT A BILL WITH ANTHONY</h2>
      <br/>
          <div>
          <label>Bill value</label>   
          <input type="text"/>
          </div>
          <br/>
          <div>Bill value  <input type="text"/>
          </div>
          <br/>
          <div>Bill value  <input type="text"/>
          </div>
          <br/>
          <div>Bill value  <input type="text"/>
          </div>
          <br/>
          <button className="button">Splitbill</button>
      </form>
}