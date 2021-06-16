import { useRouter } from "next/router";
import { ElementType, useEffect } from "react";
import { parseCookies } from 'nookies';

export function WithAuth(WrapperComponent: ElementType) {
  const Wrapper = (props: unknown) => {
    const router = useRouter()

    useEffect(() => {
      const { '@meadote.token': token } = parseCookies()

      if (!token) {
        router.replace('/Authentication/SignIn')
      }
    }, [])

    return <WrapperComponent  {...props} />
  }

  return Wrapper;
}