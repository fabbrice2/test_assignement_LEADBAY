import React from 'react'

function ErrorPage() {
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-6">
      <div className="text-center">
        <p className="text-2xl font-semibold text-red-600">Erreur 404</p>
        <p className="mt-2 text-gray-500">Page non trouvée.</p>
      </div>
    </div>
  )
}

export default ErrorPage;
