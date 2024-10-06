export default function Footer() {
    return (
        <footer className='bg-slate-200 shadow-md mt-4'>
            <div className='max-w-6xl mx-auto p-3 flex justify-center'>
                <p className='text-sm text-slate-600 text-center'>
                    &copy; {new Date().getFullYear()} Developed by Aditya Raj
                </p>
            </div>
        </footer>

    );
}
