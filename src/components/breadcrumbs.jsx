// import { Link, useLocation } from "react-router-dom";

// const Breadcrumbs = () => {
//   const location = useLocation();
//   const pathnames = location.pathname.split("/").filter((x) => x);

//   return (
//     <nav>
//       <ul className="flex space-x-2 text-gray-500">
//         <li>
//           <Link to="/" className="hover:underline">
//             Home
//           </Link>
//           {pathnames.length > 0 && <span> &gt; </span>}
//         </li>
//         {pathnames.map((value, index) => {
//           const to = `/${pathnames.slice(0, index + 1).join("/")}`;
//           const isLast = index === pathnames.length - 1;

//           return (
//             <li key={to} className={isLast ? "text-black font-bold" : ""}>
//               {!isLast ? (
//                 <Link to={to} className="hover:underline">
//                   {decodeURIComponent(value)}
//                 </Link>
//               ) : (
//                 decodeURIComponent(value)
//               )}
//               {!isLast && <span> &gt; </span>}
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// };

// export default Breadcrumbs;
