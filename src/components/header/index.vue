<template>
  <header class="header">
    <div class="container">
      <nav class="tix-nav__wrapper">
        <div class="nav-item__left">
          <div class="trix-logo">
            <router-link :to="{name: 'Dashboard'}">
              <header-logo />
            </router-link>
          </div>
        </div>

        <div class="nav-item__right">
          <div 
            class="tix-dropdown" 
            aria-haspopup="list" 
            aria-controls="dropdown-menu" 
            data-dropdown = "nav"
            tabindex="0"
          > 
            <div class="tix-dropdown__toggle">
              <span class="user-name tix-pr__2 tix-fs__15">Welcome! Oluwatunmise</span>
              <span class="user-initials">OA</span>
            </div>
            <ul class="tix-dropdown__content" id="dropdown-menu">
              <li class="tix-dropdown__item user-details">
                <span class="user-name">Adenuga Oluwatunmise</span>
                <span class="user-email">oluwatunmiseadenuga@gmail.dev</span>
              </li>
              <li class="tix-dropdown__item-divider"></li>
              <li class="tix-dropdown__item">
                <a href="#"><profile-icon />My Profile</a>
              </li>
              <li class="tix-dropdown__item">
                <a href="#"><event-icon />Events</a>
              </li>
              <li class="tix-dropdown__item">
                <a href="#"><help-icon />Help</a>
              </li>
              <li class="tix-dropdown__item">
                <a href="#"><logout-icon />Log Out</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import HeaderLogo from "./headerLogo"
import ProfileIcon from "../vectors/Profile"
import EventIcon from "../vectors/Event"
import HelpIcon from "../vectors/Help"
import LogoutIcon from "../vectors/Logout"


export default {
  components: {
    HeaderLogo,
    ProfileIcon,
    EventIcon,
    HelpIcon,
    LogoutIcon
  },
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/components/_header.scss";
</style>