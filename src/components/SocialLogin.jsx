import { FaGithub, FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {
    return (
        <div className="space-y-2">
        <button className="flex items-center gap-2 border py-3 w-full justify-center rounded-lg"><FaGoogle></FaGoogle> Login with Google</button>
            <button className="flex items-center gap-2 border py-3 w-full justify-center rounded-lg"><FaGithub></FaGithub> Login with Github</button>
        </div>
    );
};

export default SocialLogin;