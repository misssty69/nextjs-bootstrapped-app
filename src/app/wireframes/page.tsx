'use client';

import React from 'react';

export default function WireframesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Medical Appointment App - Wireframes
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Screen 1: Lista de Profesionales */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">1. Lista de Profesionales</h2>
            <div className="w-full h-96 bg-gray-100 rounded-lg p-4">
              {/* Header */}
              <div className="h-12 bg-gray-300 rounded mb-4 flex items-center px-3">
                <div className="w-6 h-6 bg-gray-400 rounded mr-3"></div>
                <span className="text-sm font-medium">Buscar especialistas</span>
              </div>
              
              {/* Filter tabs */}
              <div className="flex gap-2 mb-4">
                <div className="px-3 py-1 bg-blue-200 rounded-full text-xs">Todos</div>
                <div className="px-3 py-1 bg-gray-200 rounded-full text-xs">Cardiología</div>
                <div className="px-3 py-1 bg-gray-200 rounded-full text-xs">Dermatología</div>
              </div>
              
              {/* Professional cards */}
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border border-gray-300 rounded-lg p-3">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                      <div>
                        <div className="h-4 bg-gray-400 rounded w-24 mb-1"></div>
                        <div className="h-3 bg-gray-300 rounded w-20"></div>
                      </div>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                      <div className="h-3 bg-gray-300 rounded w-16"></div>
                      <div className="h-6 bg-blue-500 rounded w-20"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Screen 2: Perfil del Profesional */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">2. Perfil del Profesional</h2>
            <div className="w-full h-96 bg-gray-100 rounded-lg p-4">
              {/* Header with back button */}
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-300 rounded mr-3"></div>
                <div className="h-4 bg-gray-400 rounded w-24"></div>
              </div>
              
              {/* Doctor info */}
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-3"></div>
                <div className="h-5 bg-gray-400 rounded w-32 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-24 mx-auto"></div>
              </div>
              
              {/* Stats */}
              <div className="flex justify-around mb-4">
                <div className="text-center">
                  <div className="h-6 bg-gray-400 rounded w-12 mx-auto mb-1"></div>
                  <div className="h-3 bg-gray-300 rounded w-16"></div>
                </div>
                <div className="text-center">
                  <div className="h-6 bg-gray-400 rounded w-12 mx-auto mb-1"></div>
                  <div className="h-3 bg-gray-300 rounded w-16"></div>
                </div>
              </div>
              
              {/* Available slots */}
              <div className="mb-4">
                <div className="h-4 bg-gray-400 rounded w-20 mb-2"></div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="h-8 bg-gray-200 rounded"></div>
                  ))}
                </div>
              </div>
              
              {/* Book button */}
              <div className="h-10 bg-blue-500 rounded w-full"></div>
            </div>
          </div>

          {/* Screen 3: Selección de Fecha/Hora */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">3. Selección de Fecha/Hora</h2>
            <div className="w-full h-96 bg-gray-100 rounded-lg p-4">
              {/* Header */}
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-300 rounded mr-3"></div>
                <div className="h-4 bg-gray-400 rounded w-32"></div>
              </div>
              
              {/* Calendar */}
              <div className="mb-4">
                <div className="h-8 bg-gray-300 rounded w-full mb-2"></div>
                <div className="grid grid-cols-7 gap-1">
                  {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((day) => (
                    <div key={day} className="h-6 bg-gray-200 rounded text-center text-xs flex items-center justify-center">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 28 }, (_, i) => (
                    <div key={i} className="h-8 bg-gray-100 border border-gray-300 rounded"></div>
                  ))}
                </div>
              </div>
              
              {/* Time slots */}
              <div>
                <div className="h-4 bg-gray-400 rounded w-16 mb-2"></div>
                <div className="grid grid-cols-3 gap-2">
                  {['9:00', '10:00', '11:00', '14:00', '15:00', '16:00'].map((time) => (
                    <div key={time} className="h-8 bg-gray-200 rounded flex items-center justify-center text-sm">
                      {time}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Screen 4: Confirmación de Cita */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">4. Confirmación de Cita</h2>
            <div className="w-full h-96 bg-gray-100 rounded-lg p-4">
              {/* Header */}
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-300 rounded mr-3"></div>
                <div className="h-4 bg-gray-400 rounded w-24"></div>
              </div>
              
              {/* Confirmation details */}
              <div className="bg-white rounded-lg border border-gray-300 p-4 mb-4">
                <div className="h-5 bg-gray-400 rounded w-32 mb-3"></div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div className="h-4 bg-gray-300 rounded w-16"></div>
                    <div className="h-4 bg-gray-400 rounded w-24"></div>
                  </div>
                  <div className="flex justify-between">
                    <div className="h-4 bg-gray-300 rounded w-12"></div>
                    <div className="h-4 bg-gray-400 rounded w-20"></div>
                  </div>
                  <div className="flex justify-between">
                    <div className="h-4 bg-gray-300 rounded w-20"></div>
                    <div className="h-4 bg-gray-400 rounded w-16"></div>
                  </div>
                </div>
              </div>
              
              {/* Patient info form */}
              <div className="mb-4">
                <div className="h-4 bg-gray-400 rounded w-24 mb-2"></div>
                <div className="space-y-2">
                  <div className="h-8 bg-gray-200 rounded"></div>
                  <div className="h-8 bg-gray-200 rounded"></div>
                  <div className="h-20 bg-gray-200 rounded"></div>
                </div>
              </div>
              
              {/* Confirm button */}
              <div className="h-10 bg-green-500 rounded w-full"></div>
            </div>
          </div>

          {/* Screen 5: Historial de Citas */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">5. Historial de Citas</h2>
            <div className="w-full h-96 bg-gray-100 rounded-lg p-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="h-4 bg-gray-400 rounded w-24"></div>
                <div className="h-8 w-8 bg-gray-300 rounded"></div>
              </div>
              
              {/* Filter tabs */}
              <div className="flex gap-2 mb-4">
                <div className="px-3 py-1 bg-blue-200 rounded-full text-xs">Próximas</div>
                <div className="px-3 py-1 bg-gray-200 rounded-full text-xs">Pasadas</div>
                <div className="px-3 py-1 bg-gray-200 rounded-full text-xs">Canceladas</div>
              </div>
              
              {/* Appointment cards */}
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white border border-gray-300 rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="h-4 bg-gray-400 rounded w-24 mb-1"></div>
                        <div className="h-3 bg-gray-300 rounded w-20"></div>
                      </div>
                      <div className="h-6 bg-green-100 rounded px-2 text-xs flex items-center">
                        <span className="text-green-800">Confirmada</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="h-3 bg-gray-300 rounded w-16"></div>
                      <div className="h-3 bg-gray-300 rounded w-12"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Design Patterns Legend */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:col-span-2 lg:col-span-3">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Patrones de Diseño Aplicados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold mb-2">Navegación</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Bottom navigation para acceso rápido</li>
                  <li>• Back button consistente en todas las pantallas</li>
                  <li>• Breadcrumbs en flujo de reserva</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Interacción</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Cards para información de profesionales</li>
                  <li>• Calendar picker intuitivo</li>
                  <li>• Formularios con validación visual</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Feedback</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Estados visuales de citas (confirmada/pendiente)</li>
                  <li>• Indicadores de carga</li>
                  <li>• Mensajes de confirmación</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Accesibilidad</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Tamaños de touch adecuados (44x44px)</li>
                  <li>• Contraste de colores WCAG 2.1</li>
                  <li>• Jerarquía visual clara</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Wireframes de baja-media fidelidad para app de reserva de citas médicas
          </p>
          <div className="text-sm text-gray-500">
            <p>Estos wireframes representan el flujo completo de usuario:</p>
            <p>Explorar → Perfil → Selección → Confirmación → Historial</p>
          </div>
        </div>
      </div>
    </div>
  );
}
