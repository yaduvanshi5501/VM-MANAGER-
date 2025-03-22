import { useState } from "react";

export default function CloudVMManager() {
    const [vmArray, setVmArray] = useState([]);
    const [vmName, setVmName] = useState("");
    const [vmOS, setVmOS] = useState("ubuntu");

    const createVM = (event) => {
        event.preventDefault();
        if (vmName.trim() === "") {
            alert("Please enter a valid VM name.");
            return;
        }
        setVmArray([...vmArray, { id: vmArray.length + 1, name: vmName, os: vmOS }]);
        setVmName("");
    };

    const deleteVM = (index) => {
        setVmArray(vmArray.filter((_, i) => i !== index));
    };

    return (
        <div 
            className="flex justify-center items-center min-h-screen"
            style={{
                backgroundImage: "url('/VMware-Cloud-on-AWS.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <div className="container w-3/4 bg-white p-10 rounded-lg shadow-md text-center border-4 border-gray-600">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">🚀 Cloud VM Management</h1>

                <div className="form-container bg-gray-100 p-6 rounded-lg border border-gray-300">
                    <form onSubmit={createVM} className="flex flex-col items-center space-y-6">
                        <div className="flex w-full justify-between items-center mb-6">
                            <label className="text-gray-700 w-1/3 text-lg">VM Name:</label>
                            <input 
                                type="text" 
                                value={vmName} 
                                onChange={(e) => setVmName(e.target.value)}
                                className="border p-3 w-2/3 rounded"
                                required 
                            />
                        </div>
                        
                        <div className="flex w-full justify-between items-center mb-6">
                            <label className="text-gray-700 w-1/3 text-lg">Operating System: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <select 
                                value={vmOS} 
                                onChange={(e) => setVmOS(e.target.value)} 
                                className="border p-3 w-2/3 rounded"
                            >
                                <option value="ubuntu">Ubuntu</option>
                                <option value="windows">Windows</option>
                                <option value="centos">CentOS</option>
                            </select>
                        </div>
                        
                        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 text-lg">
                            Create VM
                        </button>
                    </form>
                </div>

                <div className="mt-10 p-6 rounded-lg border border-gray-300">
                    <h2 className="text-lg font-semibold mb-6">Existing VMs</h2>
                    {vmArray.length === 0 ? (
                        <p>No VMs created yet.</p>
                    ) : (
                        <table className="w-3/4 mx-auto border-collapse border border-gray-400 bg-white text-black">
                            <thead>
                                <tr className="bg-gray-600 text-white">
                                    <th className="border border-gray-400 px-6 py-4">No</th>
                                    <th className="border border-gray-400 px-6 py-4">VM Name</th>
                                    <th className="border border-gray-400 px-6 py-4">OS</th>
                                    <th className="border border-gray-400 px-6 py-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vmArray.map((vm, index) => (
                                    <tr key={index} className="bg-gray-800 text-white">
                                        <td className="border border-gray-400 px-6 py-6">{vm.id}</td>
                                        <td className="border border-gray-400 px-6 py-6">{vm.name}</td>
                                        <td className="border border-gray-400 px-6 py-6">{vm.os}</td>
                                        <td className="border border-gray-400 px-6 py-6">
                                            <button 
                                                onClick={() => deleteVM(index)} 
                                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}
