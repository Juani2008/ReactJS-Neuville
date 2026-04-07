/* firebase */
import { initializeApp } from "firebase/app";
import { getFirestore,collection,getDocs, query, where, addDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCn_r9v0W4DjWLrnaaeLVpxjZI5iZvv5Pk",
  authDomain: "reactjs-neuville.firebaseapp.com",
  projectId: "reactjs-neuville",
  storageBucket: "reactjs-neuville.firebasestorage.app",
  messagingSenderId: "714673352230",
  appId: "1:714673352230:web:cb2308f8d4e970b82240e7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);




async function getProducts() {
    const collectioRef = collection(db,"products");
    const collectionSnap = getDocs(collectioRef)
    
    const docsArray = collectionSnap.docs;
    const docsData = docsArray.map(item => {
        return{
        id: id.data, ...item.data()
        }
    })
    
    return docsData
    
}

async function getProductsById(idRequested) {
    const docRef = doc(db,"products", idRequested)
    const docSnap =  await getDocs(docRef)

    return{
        id: docSnap.id,
        ...docSnap.data()
    }
}

async function getProductsByCategory(categoryReq) {
 const collectionRef = collection(db,"products") 
 const q = query(collectionRef, where("category", "==", categoryReq));
 const collectionSnap = await getDocs(q)

 const docsArray = collectionSnap.docs
 const docsData = docsArray.map (doc =>{
    return{ id: doc.id, ...doc.data()}
 })
 return docsData

}


async function createOrder(orderData) {
    /* const orderData = {
        buyer: {name: "Santiago" , tel: "123456" },
        date: new Date(),
        items:
       esto va en la logica del cartcontainer
    } */
   const collectionOrdersRef = collection(db, "orders");
    const resp= await addDoc(collectionOrdersRef, orderData)
}

async function exportToFirestore(params) {
    
}

export {getProducts,getProductsById, createOrder}
