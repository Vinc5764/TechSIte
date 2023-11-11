import { useRouter } from "next/router";
import Image from "next/image";
import { blogsData } from './index'

const BlogsDetail = () => {
  const router = useRouter()
  const { id } = router.query
  const blogId = parseInt(id)

  const blog = blogsData.blogs.find((blog) => blog.id === blogId)
  if (!blogsData.post) {
    return <Loader/>;
  }

  return (
    <section className="mx-[7%] w-[86%] sm:mx-[5%] sm:w-[90%] mb-[60px]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mt-[60px]">
        {blog?.topic}
      </h1>
      <p className="text-gray-600 text-lg font-semibold my-8">{blog?.date}</p>
      <Image src={blog?.image} alt={blog?.keyword} className='rounded-md  w-full h-[50vh] sm:h-[70vh] md:h-[70vh] lg:h-[90vh]'/>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 my-4">
        {blog?.title}
      </h1>

      <h1 className='font-bold text-xl sm:text-2xl md:text-3xl border-l-4 pl-3 text-gray-800 border-violet-700 my-10'>
        {blog?.firstquote}
      </h1>

      <p className="text-gray-700 text-lg font-semibold my-6">{blog?.introduction}</p>
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 my-4">
        {blog?.experiences?.head}
      </h1>
      <p className="text-gray-700 text-lg font-semibold my-6">
        {blog?.experiences?.content}
      </p>    

      {
        blog?.sections?.map((section)=> (
          <div className='my-5 text-gray-800'>
           <h3 className='text-xl sm:text-2xl font-bold '>{section.title}</h3>
           <p className='text-lg font-semibold mt-3 text-gray-700'>
            {section.content}
            </p>
          </div>
        ))
      }
      <h1 className='font-bold text-xl sm:text-2xl md:text-3xl border-l-4 pl-3 text-gray-800 border-violet-700 my-10'>
        {blog?.middleqoute}
      </h1>
       <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl">
        {blog?.component}
      </h1>
      {
        blog?.benefits?.map((benefit)=> (
          <div className='my-5 text-gray-800'>
           <h3 className='text-xl sm:text-2xl  font-bold '>{benefit.title}</h3>
           <p className='text-lg font-semibold mt-3 text-gray-700'>
            {benefit.content}
            </p>
          </div>
        ))
      }

  {
        blog?.impacts?.map((impact)=> (
          <div className='my-5 text-gray-800'>
           <h3 className='text-xl sm:text-2xl  font-bold '>{impact?.title}</h3>
           <p className='text-lg font-semibold mt-3 text-gray-700'>
            {impact?.content}
            </p>
          </div>
        ))
      }
     
     <div className='mt-12'>
        <h3 className='text-xl sm:text-2xl font-bold '>
          {blog?.preventions?.heading}
        </h3>
        <ul className="list-decimal text-gray-500">
          {blog?.preventions?.prevention?.map((prevent)=> (
            <li className='text-lg font-semibold mt-3 text-gray-700'>
              <span className="font-bold mr-2">{prevent?.title}</span>
              <span>{prevent?.content}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className='mt-12'>
        <h3 className='text-xl sm:text-2xl  font-bold '>
          {blog?.Strategies?.heading}
        </h3>
        <ul className="list-decimal text-gray-500">
          {blog?.Strategies?.Strategy?.map((item)=> (
            <li className='text-lg font-semibold mt-3 text-gray-700'>
              <span className="font-bold mr-2">{item?.title}</span>
              <span>{item?.content}</span>
            </li>
          ))}
        </ul>
      </div>
      
     <h1 className='font-bold text-xl sm:text-2xl md:text-3xl border-l-4 pl-3 text-gray-800 border-violet-700 my-10'>
        {blog?.lastqoute}
      </h1>

      <div className='mt-12'>
        <h3 className='text-2xl sm:text-4xl font-bold '>
          {blog?.approach?.heading}
        </h3>
        <ul className="text-gray-500">
          {blog?.approach?.content?.map((item)=> (
            <li className='text-lg font-semibold mt-3 text-gray-700'>
             {item}
            </li>
          ))}
        </ul>
      </div>

     <div className='mt-12'>
        <h3 className='text-2xl sm:text-3xl font-bold '>
          {blog?.conclusion?.heading}
        </h3>
        <ul>
          {blog?.conclusion?.content?.map((content)=> (
            <li className='text-lg font-semibold mt-3 text-gray-700'>
              {content}
            </li>
          ))}
        </ul>
      </div>

    {/*  <Navigation id ={blogId} data={blogsData.blogs}/>*/}
    </section>
  )
}

export default BlogsDetail