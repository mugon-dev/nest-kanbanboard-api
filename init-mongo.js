db.createUser({
  user: 'root',
  pwd: 'kanban123',
  roles: [
    {
      role: 'readWrite',
      db: 'kanban',
    },
  ],
});
