import { collection, getDocs, query, where } from 'firebase/firestore';

import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { db } from '../../firebaseConfigue';
import Blogs from '../Blogs/Blogs';
import Loading from '../Loading';

const MyProfile = () => {

const {currentUser} = useAuth()

const [loading, setLoading] = useState(true);
  
  const searchValue = currentUser.uid

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const articleRef = collection(db, 'Blog');

      // Check if searchValue is not empty before querying
      if (searchValue.trim() !== '') {
        const q = query(articleRef, where('userId', '==', searchValue) ); // Replace 'author' with your actual field

        try {
          const querySnapshot = await getDocs(q);

          const results = [];

          querySnapshot.forEach((doc) => {
            results.push({
              id: doc.id,
              ...doc.data(),
            });
          });

          setSearchResults(results);
          setLoading(false)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        // If searchValue is empty, reset the search results
        setSearchResults([]);
      }
    };

    fetchData();
  }, [searchValue]); // Run the effect whenever searchValue changes

  return (
    <div className='name-section-two' style={{marginTop: "70px"}}>
        {loading && <Loading />}
        {!loading && searchResults.length === 0 ? <h1>No blog Found!</h1> : <></>}
        {searchResults.map((result) => (
            <Blogs value={result} key={result.id} /> 
        ))}
    </div>
  );
};

export default MyProfile;


