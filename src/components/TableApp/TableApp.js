import axios from 'axios'
import { useMemo, useState, useEffect } from 'react'
import  '../../App.css'
import Table from './Table'
export default function TableApp(){

     

     const columns = useMemo(
          ()=> [
               {
               Header: "TV Show",
               columns: [
                    {
                         Header: "Name", 
                         accessor: "show.name",
                    },
                    {
                         Header: " Type", 
                         accessor: "show.type",
                    }
               ],
               },

     {
          Header: "Details",
          columns: [
               {
                    Header: "Language", 
                    accessor: 'show.language',
               }, 
               {
                    Header: "Genre", 
                    accessor: "show.genre",
                   
                   
               },
               {
                    Header: "Runtime", 
                    accessor: 'show.runtime',
                    Cell: ({ cell: { value } }) => {
                         const hour = Math.floor(value / 60);
                         const min = Math.floor(value % 60);
                         return (
                           <>
                             {hour > 0 ? `${hour} hr${hour > 1 ? "s " : ""}` : ""}
                             {min > 0 ? `${min}  min${min > 1 ? "s " : ""}` : ""}
                           </>
                         );
                       }

               },


               {
                    Header: " Score", 
                    accessor: 'score',
                    Cell: ({ cell: { value } }) => {
                         const roundedScore = (value *100).toFixed(2);
                        
                         return (
                           <>
                             {roundedScore}
                           </>
                         );
                       }

               }, 
          ],

     },
],[]
     )
     const [ data, setData] = useState([])

     useEffect(()=> {
          (async ()=> {
               const result = await axios('https://api.tvmaze.com/search/shows?q=snow')
               setData(result.data)
               console.log(data)
          })()
     },[])
     return <div className='App'>
          <Table columns={columns} data ={data}/>
     </div>

}