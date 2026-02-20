import Card from "./component/Card"

const App = () => {

    const jobOpenings = [
  {
    brandlogo: "https://imgs.search.brave.com/Av8rHxCJHlS9Y8Lqm8zPg9e3-kUJ5kSNmZRRZC2kG1s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kZXZl/bG9wZXJzLmdvb2ds/ZS5jb20vc3RhdGlj/L2lkZW50aXR5L2lt/YWdlcy9icmFuZGlu/Z19ndWlkZWxpbmVf/c2FtcGxlX2RrX3Jk/X3NsLnN2Zw",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://imgs.search.brave.com/v7xEY0HzsIjVwpeIEJOAPNvcAD-L9oy2CNe4e_Udoic/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/NDg5LzI4OC9zbWFs/bC8zZC1sb2dvLW9m/LWFwcGxlLWlwaG9u/ZS1mcmVlLXBuZy5w/bmc",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://imgs.search.brave.com/vIXMhvwrO1IvlI6AQJuo5B3QGgHq-FwDpSg4OxlD_54/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MWZhZTJkMzk1ZTZj/YTAwMDQ3YjRmMTIu/cG5n",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://imgs.search.brave.com/RMOZ4iWTIWxmPoRZ7hbmtxyGH7ZlruOIK_ADLlXWVQk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDc3NzEy/MjQucG5n",
    companyName: "Amazon",
    datePosted: "3 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Chennai, India"
  },
  {
    brandlogo: "https://imgs.search.brave.com/ruLHTGN9H6dsJ1T7enQdh4ZdowB8bYedsx2o5GiafoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/Mjk3NjQ3YzdlYzc2/YjgyZmIyMWZjZTMu/cG5n",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Delhi, India"
  },
  {
    brandlogo: "https://imgs.search.brave.com/54A9v3olhWA1OkYoWTBFixd29EVtflt7o4hEmvJdPuE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjEv/NTE0LzgyNi9zbWFs/bC93aW5kb3dzLWJy/YW5kLXN5bWJvbC1s/b2dvLWRlc2lnbi1t/aWNyb3NvZnQtc29m/dHdhcmUtaWxsdXN0/cmF0aW9uLXdpdGgt/YmxhY2stYmFja2dy/b3VuZC1mcmVlLXZl/Y3Rvci5qcGc",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Pune, India"
  },
  {
    brandlogo: "https://imgs.search.brave.com/1meX8u4ZoqvEI9lPkXqyBDkosHThxn_x0jLAqVIenxs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9UZXNsYSxf/SW5jLi9UZXNsYSxf/SW5jLi1Mb2dvLndp/bmUuc3Zn",
    companyName: "Tesla",
    datePosted: "6 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "Austin, USA"
  },
  {
    brandlogo: "https://imgs.search.brave.com/RXAr7jOeV6kDj-pMh1c5681vuigiImlEmp8El0UMK7g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/MTE4LzU0NS9zbWFs/bC9hZG9iZS1sb2dv/LXN0YW5kYXJkLWlj/b24tYXBwLWxvZ28t/ZWRpdGFibGUtdHJh/bnNwYXJlbnQtYmFj/a2dyb3VuZC1wcmVt/aXVtLXNvY2lhbC1t/ZWRpYS1kZXNpZ24t/Zm9yLWRpZ2l0YWwt/ZG93bmxvYWQtZnJl/ZS1wbmcucG5n",
    companyName: "Adobe",
    datePosted: "9 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Noida, India"
  },
  {
    brandlogo: "https://imgs.search.brave.com/zPoAxnWc6FV4Ld5teekSK4c8LxKngKtiI4HL9XhByjE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bnZpZGlhLmNvbS9j/b250ZW50L252aWRp/YUdEQy91cy9lbl9V/Uy9hYm91dC1udmlk/aWEvbGVnYWwtaW5m/by9sb2dvLWJyYW5k/LXVzYWdlL19qY3Jf/Y29udGVudC9yb290/L3Jlc3BvbnNpdmVn/cmlkL252X2NvbnRh/aW5lcl8zOTI5MjE3/MDUvbnZfY29udGFp/bmVyL252X2ltYWdl/LmNvcmVpbWcucG5n/LzE3MDMwNjAzMjkw/NTMvbnZpZGlhLWxv/Z28tdmVydC5wbmc",
    companyName: "NVIDIA",
    datePosted: "8 weeks ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Santa Clara, USA"
  },
  {
    brandlogo: "https://imgs.search.brave.com/Ng3ovJirtLC9ah5RcwYmeT0KEDH5AdzHoKbifMa9cYg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5kZXNpZ25ydXNo/LmNvbS9pbnNwaXJh/dGlvbl9pbWFnZXMv/NjUxNTYwL2NvbnZl/cnNpb25zLzEyMDB4/NjAwd2EtZGVza3Rv/cC5qcGc",
    companyName: "Uber",
    datePosted: "12 days ago",
    post: "Mobile App Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Gurgaon, India"
  }
];

console.log(jobOpenings)

return (
    <div className ='parent'>

    { jobOpenings.map(function(elem){

        return <Card company={elem.companyName}
        date={elem.datePosted} 
        post={elem.post} 
        tag1={elem.tag1} 
        tag2={elem.tag2} 
        pay={elem.pay} 
        location={elem.location} 
        logo={elem.brandlogo}/>
    })}
        
    </div>

    
  )
}

export default App