// src/routes/error-page.tsx
type ErrorPageProps = {
  message?: string;
};

export default function ErrorPage() {
  const message = "An unexpected error occurred." 
  return (
    <div className="page-container">
      <h2 >Oops!</h2>
      <p>{message}</p>
    </div>
  );
}