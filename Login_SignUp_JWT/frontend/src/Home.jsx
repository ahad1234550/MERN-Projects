const Home = ({ setToken }) => {
    return ( 
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="text-center space-y-4"> 
                    <p className="text-lg font-semibold text-gray-800">HEY AHAD</p>
                    <button onClick={()=> setToken("")} className="mt-6 px-6 py-2 bg-red-600 rounded-md">Logout</button>
                </div>
            </div>
        </div>
     );
}
 
export default Home;