import { auth } from "auth"
import ClientComponent from "@/components/ClientComponent"
import { SessionProvider } from "next-auth/react"

export default async function ClientPage() {
    const session = await auth() //这里是通过next-auth导出的auth函数来获得会话信息
    if (session?.user) {
        // 选择需要的信息传给客户端，避免敏感信息泄露
        session.user = {
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
        }
    }
    //这里的sessionProvider可以将session传递给子组件，然后子组件通过useSession()获取session
    return (

        <SessionProvider session={session}>
            <ClientComponent />
        </SessionProvider>
    )
}