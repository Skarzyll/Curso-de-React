import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
    return(
        <footer className="bg-zinc-800 h-24 p-1">
            <button className='p-2 m-2 rounded-full bg-slate-500'>
                <FaFacebookF className='h-6 w-6 text-white' />
            </button>
            <button className='p-2 m-2 rounded-full bg-slate-500'>
                <FaInstagram className='h-6 w-6 text-white' />
            </button>
            <button className='p-2 m-2 rounded-full bg-slate-500'>
                <FaXTwitter className='h-6 w-6 text-white' />
            </button>
            <p>Costs &copy;	2024</p>
        </footer>
    )
}