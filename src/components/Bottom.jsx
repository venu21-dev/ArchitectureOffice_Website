import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from "@remixicon/react"

const Bottom = () => {
  return (
    <footer className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4">
            <div className="flex space-x-6 mb-2">
                <a href="http://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit out Facebook page">
                    <RiFacebookFill/>
                </a>
                
                <a href="http://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit out Facebook page">
                    <RiTwitterFill/>
                </a>
                
                <a href="http://Instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit out Facebook page">
                    <RiInstagramFill/>
                </a>
            </div>
                <p className="text-sm">&copy; 2024 Lunarcreation. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Bottom