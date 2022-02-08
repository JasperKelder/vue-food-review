<template>
  <header>
    <nav>
      <h1>
        <router-link to="/reviews">Vue Food Review</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/add">Add Review</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #15616d;
  border-bottom: 6px solid #001524;
}

header a {
  text-decoration: none;
  color: #ffecd1;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 3px solid #001524;
  border-radius: 1rem;
  transition: all 0.4s;
  background-color: #78290f;
}

a:active,
a:hover,
a.router-link-active {
  border-color: #ff7d00;
}

h1 {
  margin: 0;
  margin-left: 10rem;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin-right: 10rem;
}
</style>
