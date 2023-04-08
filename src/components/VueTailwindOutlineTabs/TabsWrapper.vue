<template>
    <div class="grid place-items-center sm:hidden">
      <div class="w-72 scrollbar-hide overflow-auto">
        <ul class="flex justify-between items-center w-full">
          <slot />
        </ul>
      </div>
    </div>
    <div>
      <div class="hidden w-72 overflow-auto sm:flex sm:w-[768px]">
        <ul class="flex justify-between items-center sm:w-full sm:flex sm:justify-between sm:items-center">
          <slot />
        </ul>
      </div>
    </div>
  </template>
  