import React from 'react';
import UserAvatar from '../../images/mc.png';

function DashboardCard07() {
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Sucursales</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Nombre</div>
                </th>
                {/*       <th className="p-2">
                  <div className="font-semibold text-center">Descripción</div>
                </th> */}
                <th className="p-2">
                  <div className="font-semibold text-center">IP Servidor</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Estado</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    {/* <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
                      <circle fill="#24292E" cx="18" cy="18" r="18" />
                      <path d="M18 10.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V24c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" fill="#FFF" />
                    </svg> */}
                    <img class="w-10 h-10 rounded-full" src={UserAvatar} alt="Jese image"/>
                    <div className="text-slate-800" style={{margin: 10}}>McDonald's - Aviadores </div>
                  </div>
                </td>
                {/*     <td className="p-2">
                  <div className="text-center">2.4K</div>
                </td> */}
                <td className="p-2">
                  <div className="text-center">
                    192.168.100.64 <span class="relative  h-3 w-3">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                  </div>
                </td>
                <td className="p-2 text-center">
                <span
                    class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                  >
                    {/* <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span> */}
                    Online
                  </span>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">

                  <img class="w-10 h-10 rounded-full" src={UserAvatar} alt="Jese image"/>
                    <div className="text-slate-800" style={{margin: 10}}>McDonald's - Ciudad del Este</div>
                  </div>
                </td>
                {/*  <td className="p-2">
                  <div className="text-center">2.2K</div>
                </td> */}
                <td className="p-2">
                  <div className="text-center">
                    192.168.100.64 <span class="relative  h-3 w-3">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                  </div>
                </td>
                <td className="p-2 text-center">
                  <span
                    class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                  >
                    {/* <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span> */}
                    Online
                  </span>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">

                  <img class="w-10 h-10 rounded-full" src={UserAvatar} alt="Jese image"/>
                    <div className="text-slate-800" style={{margin: 10}}>McDonald's - Mariscal López</div>
                  </div>
                </td>
                {/*  <td className="p-2">
                  <div className="text-center">2.0K</div>
                </td> */}
                <td className="p-2">
                  <div className="text-center">
                    192.168.100.64 <span class="relative  h-3 w-3">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                  </div>
                </td>
                <td className="p-2 text-center">

                <span
                    class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                  >
                    {/* <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span> */}
                    Online
                  </span>                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                  <img class="w-10 h-10 rounded-full" src={UserAvatar} alt="Jese image"/>
                    <div className="text-slate-800" style={{margin: 10}}>McDonald's - Sajonia</div>
                  </div>
                </td>
                {/*  <td className="p-2">
                  <div className="text-center">1.9K</div>
                </td> */}
                <td className="p-2">
                  <div className="text-center">
                    192.168.100.64 <span class="relative  h-3 w-3">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  </div>
                </td>
                <td className="p-2 text-center">
                <span
                    class="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600"
                  >
                    {/* <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span> */}
                    offline
                  </span>                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                  <img class="w-10 h-10 rounded-full" src={UserAvatar} alt="Jese image"/>
                    <div className="text-slate-800" style={{margin: 10}}>  McDonald's - Superseis</div>
                  </div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center">1.7K</div>
                </td> */}
                <td className="p-2">
                  <div className="text-center">
                    192.168.100.64 <span class="relative  h-3 w-3">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  </div>
                </td>
                <td className="p-2 text-center">
                <span
                    class="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600"
                  >
                    {/* <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span> */}
                    offline
                  </span>   
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
