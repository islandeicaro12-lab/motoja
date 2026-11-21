// MotoJá — service worker (notificações do piloto)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || './#piloto';
  e.waitUntil((async () => {
    const all = await self.clients.matchAll({type:'window', includeUncontrolled:true});
    for (const c of all){ if (c.url.split('#')[0] === url.split('#')[0]){ await c.focus(); try{ c.navigate(url); }catch(err){} return; } }
    await self.clients.openWindow(url);
  })());
});
