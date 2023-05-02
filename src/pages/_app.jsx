import { ThemeProvider } from "next-themes";
import AdminLayout from "@/components/layout/admin/admin";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserLayout from "@/components/layout/user/userLayout";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  const router = useRouter();

  const adminPath = router.pathname.startsWith("/admin");
  const userPath = router.pathname.startsWith("/user");

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {adminPath ? (
            <AdminLayout>
              <Component {...pageProps} />
            </AdminLayout>
          ) : userPath ? (
            <UserLayout>
              <Component {...pageProps} />
            </UserLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}
