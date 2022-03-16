<template>
  <v-content class="ma-4">
    <div class="text-h4 font-weight-bold mt-4">Alerts</div>
    <hr>
    <div class="mt-4">
      <v-alert
        type="success"
        elevation="13"
      >Success
      </v-alert>
      <v-alert
        dense
        type="success"
      >Success
      </v-alert>
      <v-alert
        prominent
        type="success"
      >Success
      </v-alert>
      <v-alert
        outlined
        type="success"
      >Success
      </v-alert>
      <v-alert
        text
        type="success"
      >Success
      </v-alert>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Avatars</div>
    <hr>
    <div class="mt-4">
      <v-avatar
        color="primary"
        size="48"
      >C
      </v-avatar>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Badges</div>
    <hr>
    <div class="mt-4">
      <v-badge
        :content="1"
        :value="1"
        color="green"
        overlap
      >
        <v-icon large>
          mdi-vuetify
        </v-icon>
      </v-badge>

      <v-badge
        dot
        color="green"
        overlap
      >
        <v-icon large>
          mdi-vuetify
        </v-icon>
      </v-badge>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Banners</div>
    <hr>
    <div class="mt-4">
      <v-banner>A banner for use on desktop / mobile</v-banner>
      <v-banner
        elevation="8"
        icon="mdi-vuetify"
      >A banner for use on desktop / mobile
      </v-banner>
    </div>

    <div class="text-h4 font-weight-bold mt-4">App bar</div>
    <hr>
    <div class="mt-4">
      <v-app-bar class="mb-4">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-app-bar>
      <v-app-bar
        flat
        color="orange"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-app-bar>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Bottom navigation</div>
    <hr>
    <div class="mt-4">
      <v-bottom-navigation
        :value="value"
        color="teal"
        grow
        class="mb-4"
      >
        <v-btn>
          <span>Recents</span>
          <v-icon>mdi-history</v-icon>
        </v-btn>
        <v-btn>
          <span>Favorites</span>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn>
          <span>Nearby</span>
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </v-bottom-navigation>
      <v-bottom-navigation
        v-model="value"
        :background-color="color"
        dark
        shift
      >
        <v-btn>
          <span>Video</span>
          <v-icon>mdi-television-play</v-icon>
        </v-btn>
        <v-btn>
          <span>Music</span>
          <v-icon>mdi-music-note</v-icon>
        </v-btn>
        <v-btn>
          <span>Book</span>
          <v-icon>mdi-book</v-icon>
        </v-btn>
        <v-btn>
          <span>Image</span>
          <v-icon>mdi-image</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Bottom sheets</div>
    <hr>
    <div class="mt-4">
      <v-btn
        dark
        @click="bottomSheet = !bottomSheet"
      >
        Open Inset
      </v-btn>

      <v-bottom-sheet hide-overlay v-model="bottomSheet">
        <v-sheet
          class="text-center"
          height="200px"
        >
          <v-btn
            class="mt-6"
            text
            color="red"
            @click="bottomSheet = !bottomSheet"
          >
            close
          </v-btn>
          <div class="py-3">
            This is a bottom sheet using the controlled by v-model instead of activator
          </div>
        </v-sheet>
      </v-bottom-sheet>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Breadcrumbs</div>
    <hr>
    <div class="mt-4">
      <v-breadcrumbs
        :items="itemsBreadcrumbs"
        divider="-"
      ></v-breadcrumbs>
      <v-breadcrumbs
        :items="itemsBreadcrumbs"
        divider="-"
        large
      ></v-breadcrumbs>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Buttons</div>
    <hr>
    <div class="mt-4">
      <v-btn elevation="2" class="ma-2">Button</v-btn>
      <v-btn depressed class="ma-2">Button</v-btn>
      <v-btn outlined class="ma-2">Button</v-btn>
      <v-btn plain class="ma-2">Button</v-btn>
      <v-btn rounded class="ma-2">Button</v-btn>
      <v-btn text class="ma-2">Button</v-btn>
      <v-btn tile class="ma-2">Button</v-btn>
      <v-btn block>Button</v-btn>
      <v-btn loading class="ma-2">Button</v-btn>
      <v-btn x-small class="ma-2">Button</v-btn>
      <v-btn small class="ma-2">Button</v-btn>
      <v-btn medium class="ma-2">Button</v-btn>
      <v-btn large class="ma-2">Button</v-btn>
      <v-btn x-large class="ma-2">Button</v-btn>
      <v-btn dark class="ma-2">Button</v-btn>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Buttons (FAB)</div>
    <hr>
    <div class="mt-4">
      <v-btn fab class="ma-2">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn fab dark class="ma-2">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn fab outlined class="ma-2">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn fab text class="ma-2">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn fab x-small class="ma-2">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn fab small class="ma-2">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn fab medium class="ma-2">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn fab large class="ma-2">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn fab x-large class="ma-2">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Calendars</div>
    <hr>
    <div class="mt-4">

    </div>

    <div class="text-h4 font-weight-bold mt-4">Cards</div>
    <hr>
    <div class="mt-4">
      <v-card elevation="2">
        <v-card-title>Title</v-card-title>
        <v-card-text>Text</v-card-text>
      </v-card>
      <v-card outlined class="mt-4">
        <v-card-title>Title</v-card-title>
        <v-card-text>Text</v-card-text>
        <v-card-actions>
          <v-btn
            text
            color="teal accent-4"
          >
            Learn More
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card loading class="mt-4">
        <v-card-title>Title</v-card-title>
        <v-card-text>Text</v-card-text>
      </v-card>
      <v-card width="400" class="mt-4">
        <v-img
          height="200px"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        >
          <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >
            <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

            <v-toolbar-title class="title white--text pl-0">
              Messages
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
              color="white"
              icon
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar>

          <v-card-title class="white--text mt-8">
            <v-avatar size="56">
              <img
                alt="user"
                src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
              >
            </v-avatar>
            <p class="ml-3">
              John Doe
            </p>
          </v-card-title>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            Today
          </div>
        </v-card-text>
      </v-card>
      <v-card
        class="mx-auto mt-4"
        color="#26c6da"
        dark
        max-width="400"
      >
        <v-card-title>
          <v-icon
            large
            left
          >
            mdi-twitter
          </v-icon>
          <span class="title font-weight-light">Twitter</span>
        </v-card-title>

        <v-card-text class="headline font-weight-bold">
          "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as
          well."
        </v-card-text>

        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Evan You</v-list-item-title>
            </v-list-item-content>

            <v-row
              align="center"
              justify="end"
            >
              <v-icon class="mr-1">
                mdi-heart
              </v-icon>
              <span class="subheading mr-2">256</span>
              <span class="mr-1">·</span>
              <v-icon class="mr-1">
                mdi-share-variant
              </v-icon>
              <span class="subheading">45</span>
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Carousels</div>
    <hr>
    <div class="mt-4">
      <v-carousel v-model="modelCarousel">
        <v-carousel-item
          v-for="(color, i) in colorsCarousel"
          :key="color"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-sheet
            :color="color"
            height="100%"
            tile
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="display-3">
                Slide {{ i + 1 }}
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

      <v-carousel v-model="modelCarousel" class="mt-4">
        <v-carousel-item
          v-for="(color, i) in colorsCarousel"
          :key="color"
        >
          <v-sheet
            :color="color"
            height="100%"
            tile
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="display-3">
                Slide {{ i + 1 }}
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Chips</div>
    <hr>
    <div class="mt-4">
      <v-chip>Chip</v-chip>
      <v-chip label>Chip</v-chip>
      <v-chip link>Chip</v-chip>
      <v-chip outlined>Chip</v-chip>
      <v-chip close close-icon="mdi-close-outline">Chip</v-chip>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Dialogs</div>
    <hr>
    <div class="mt-4">
      <!--fullscreen можно убрать-->
      <v-dialog
        v-model="dialog"
        width="500"
        fullscreen
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="red lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Click Me
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="headline grey lighten-2">
            Privacy Policy
          </v-card-title>

          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Dividers</div>
    <hr>
    <div class="mt-4">
      <v-divider></v-divider>
      <v-divider vertical></v-divider>
      <v-divider inset></v-divider>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Expansion panels</div>
    <hr>
    <div class="mt-4">
      <v-expansion-panels>
        <v-expansion-panel
          v-for="(item,i) in 5"
          :key="i"
        >
          <v-expansion-panel-header>
            Item
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels class="mt-4" inset>
        <v-expansion-panel
          v-for="(item,i) in 5"
          :key="i"
        >
          <v-expansion-panel-header>
            Item
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Footers</div>
    <hr>
    <div class="mt-4">
      <v-footer
        v-bind="localAttrs"
        :padless="footerPadless"
      >
        <v-card
          flat
          tile
          width="100%"
          class="red lighten-1 text-center"
        >
          <v-card-text>
            <v-btn
              v-for="icon in footerIcons"
              :key="icon"
              class="mx-4"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>
      </v-footer>

    </div>

    <div class="text-h4 font-weight-bold mt-4">Forms</div>
    <hr>
    <div class="mt-4">
      <v-autocomplete></v-autocomplete>
      <v-autocomplete dense></v-autocomplete>
      <v-autocomplete filled></v-autocomplete>
      <v-autocomplete filled rounded></v-autocomplete>
      <v-autocomplete solo></v-autocomplete>
      <v-autocomplete solo-inverted></v-autocomplete>
      <v-checkbox
        :value="true"
        :label="`Checkbox 1`"
      ></v-checkbox>
      <v-file-input
        counter
        show-size
        truncate-length="15"
      ></v-file-input>
      <v-text-field
        label="Main input"
        hide-details="auto"
      ></v-text-field>
      <v-radio-group v-model="radioGroup">
        <v-radio
          v-for="n in 3"
          :key="n"
          :label="`Radio ${n}`"
          :value="n"
        ></v-radio>
      </v-radio-group>
      <v-range-slider
        hint="Im a hint"
        max="50"
        min="-50"
      ></v-range-slider>
      <v-select
        :items="[]"
        label="Standard"
      ></v-select>
      <v-slider
        hint="Im a hint"
        max="50"
        min="-50"
      ></v-slider>
      <v-switch
        :value="true"
        :label="`Switch`"
      ></v-switch>
      <v-switch
        :value="true"
        inset
        :label="`Switch`"
      ></v-switch>
      <v-textarea
        label="Default style"
        value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        hint="Hint text"
      ></v-textarea>
      <v-text-field label="Main input" hide-details="auto"></v-text-field>
      <v-text-field label="Main input" hide-details="auto" solo></v-text-field>
      <v-text-field label="Main input" hide-details="auto" filled></v-text-field>
      <v-text-field label="Main input" hide-details="auto" outlined></v-text-field>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Groups</div>
    <hr>
    <div class="mt-4">
      <v-btn-toggle tile color="deep-purple accent-3" group>
        <v-btn value="left">Left</v-btn>
        <v-btn value="center">Center</v-btn>
        <v-btn value="right">Right</v-btn>
        <v-btn value="justify">Justify</v-btn>
      </v-btn-toggle>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Hover</div>
    <hr>
    <div class="mt-4">
      <v-hover v-slot="{ hover }">
        <v-card :elevation="hover ? 12 : 2">Test</v-card>
      </v-hover>

    </div>

    <div class="text-h4 font-weight-bold mt-4">Icons</div>
    <hr>
    <div class="mt-4">
      <v-icon>mdi-minus</v-icon>
      <v-icon x-small>mdi-plus</v-icon>
      <v-icon small>mdi-plus</v-icon>
      <v-icon middle>mdi-plus</v-icon>
      <v-icon large>mdi-plus</v-icon>
      <v-icon x-large>mdi-plus</v-icon>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Images</div>
    <hr>
    <div class="mt-4">
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        max-height="150"
        max-width="250"
        src="https://picsum.photos/id/11/500/300"
      ></v-img>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Lazy</div>
    <hr>
    <div class="mt-4">

    </div>

    <div class="text-h4 font-weight-bold mt-4">Lists</div>
    <hr>
    <div class="mt-4">
      <v-card
        max-width="300"
        tile
      >
        <v-list flat>
          <v-subheader>REPORTS</v-subheader>
          <v-list-item-group
            color="primary"
          >
            <v-list-item
              v-for="(item, i) in listItems"
              :key="i"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Menus</div>
    <hr>
    <div class="mt-4">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Dropdown
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in menuItems"
            :key="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Navigation drawer</div>
    <hr>
    <div class="mt-4">
      <v-navigation-drawer permanent>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Application
            </v-list-item-title>
            <v-list-item-subtitle>
              subtext
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in drawerItems"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Pagination</div>
    <hr>
    <div class="mt-4">
      <v-pagination
        :value="1"
        :length="6"
      ></v-pagination>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Parallax</div>
    <hr>
    <div class="mt-4">
      <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Pickers</div>
    <hr>
    <div class="mt-4">
      <v-color-picker
        dot-size="25"
        swatches-max-height="200"
      ></v-color-picker>

      <v-date-picker></v-date-picker>

      <v-date-picker type="month"></v-date-picker>

      <v-time-picker></v-time-picker>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Progress</div>
    <hr>
    <div class="mt-4">
      <v-progress-circular
        indeterminate
        color="primary"
      ></v-progress-circular>
      <v-progress-linear
        class="mt-4"
        indeterminate
        color="yellow darken-2"
      ></v-progress-linear>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Ratings</div>
    <hr>
    <div class="mt-4">

    </div>

    <div class="text-h4 font-weight-bold mt-4">Sheets</div>
    <hr>
    <div class="mt-4">

    </div>

    <div class="text-h4 font-weight-bold mt-4">Skeleton loaders</div>
    <hr>
    <div class="mt-4">
      <v-sheet
        :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="pa-3"
      >
        <v-skeleton-loader
          class="mx-auto"
          max-width="300"
          type="card"
        ></v-skeleton-loader>
      </v-sheet>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Snackbars</div>
    <hr>
    <div class="mt-4">
      <v-btn
        dark
        @click="snackbar = true"
      >
        Open Snackbar
      </v-btn>
      <v-snackbar
        v-model="snackbar"
      >
        Text

        <template v-slot:action="{ attrs }">
          <v-btn
            color="pink"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Sparklines</div>
    <hr>
    <div class="mt-4">
      <v-sparkline
        :fill="sparklineFill"
        :gradient="sparklineSelectedGradient"
        :line-width="sparklineWidth"
        :padding="sparklinePadding"
        :smooth="sparklineRadius || false"
        :value="sparklineValue"
        auto-draw
      ></v-sparkline>
      <v-sparkline
        :fill="false"
        :gradient="sparklineSelectedGradient"
        :line-width="sparklineWidth"
        :padding="sparklinePadding"
        :smooth="sparklineRadius || false"
        :value="sparklineValue"
        auto-draw
      ></v-sparkline>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Steppers</div>
    <hr>
    <div class="mt-4">
      <v-stepper v-model="stepper">
        <v-stepper-header>
          <v-stepper-step :complete="stepper > 1" step="1">Name of step 1</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="stepper > 2" step="2">Name of step 2</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3">Name of step 3</v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
            <v-btn color="primary" @click="stepper = 2">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
            <v-btn color="primary" @click="stepper = 3">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
            <v-btn color="primary" @click="stepper = 1">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Subheaders</div>
    <hr>
    <div class="mt-4">
      <v-subheader>Subheader</v-subheader>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Tables</div>
    <hr>
    <div class="mt-4">
      <v-data-table
        :headers="headersTable"
        :items="dessertsTable"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Tabs</div>
    <hr>
    <div class="mt-4">
      <v-tabs>
        <v-tab>Item One</v-tab>
        <v-tab>Item Two</v-tab>
        <v-tab>Item Three</v-tab>
      </v-tabs>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Timelines</div>
    <hr>
    <div class="mt-4">
      <v-timeline>
        <v-timeline-item>timeline item</v-timeline-item>
        <v-timeline-item class="text-right">timeline item</v-timeline-item>
        <v-timeline-item>timeline item</v-timeline-item>
      </v-timeline>
    </div>

    <div class="text-h4 font-weight-bold mt-4">Tooltips</div>
    <hr>
    <div class="mt-4">
      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">Button</v-btn>
        </template>
        <span>Tooltip</span>
      </v-tooltip>
    </div>
  </v-content>
</template>

<script>
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]

export default {
  inject: {
    theme: {
      default: {isDark: false},
    },
  },
  data: () => ({
    value: 1,
    bottomSheet: false,
    itemsBreadcrumbs: [
      {
        text: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        text: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],
    modelCarousel: 0,
    colorsCarousel: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
    dialog: false,
    footerIcons: [
      'mdi-home',
      'mdi-email',
      'mdi-calendar',
      'mdi-delete',
    ],
    footerPadless: true,
    /*'default',
    'absolute',
    'fixed',*/
    footerVariant: 'default',
    radioGroup: 0,
    listItems: [
      {text: 'Real-Time', icon: 'mdi-clock'},
      {text: 'Audience', icon: 'mdi-account'},
      {text: 'Conversions', icon: 'mdi-flag'},
    ],
    menuItems: [
      {title: 'Click Me'},
      {title: 'Click Me'},
      {title: 'Click Me'},
      {title: 'Click Me 2'},
    ],
    drawerItems: [
      {title: 'Dashboard', icon: 'mdi-view-dashboard'},
      {title: 'Photos', icon: 'mdi-image'},
      {title: 'About', icon: 'mdi-help-box'},
    ],
    snackbar: false,
    sparklineFill: true,
    sparklineSelectedGradient: gradients[4],
    gradients,
    sparklinePadding: 8,
    sparklineRadius: 10,
    sparklineValue: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    sparklineWidth: 2,
    stepper: 1,
    headersTable: [
      {
        text: 'Dessert (100g serving)',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Calories', value: 'calories' },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Iron (%)', value: 'iron' },
    ],
    dessertsTable: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%',
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1%',
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7%',
      },
      {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8%',
      },
      {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16%',
      },
      {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: '0%',
      },
      {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2%',
      },
      {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45%',
      },
      {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22%',
      },
      {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6%',
      },
    ],
  }),
  computed: {
    color() {
      switch (this.value) {
        case 0:
          return 'blue-grey'
        case 1:
          return 'teal'
        case 2:
          return 'brown'
        case 3:
          return 'indigo'
        default:
          return 'blue-grey'
      }
    },
    localAttrs() {
      const attrs = {}

      if (this.footerVariant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.footerVariant] = true
      }
      return attrs
    },
  }
}
</script>

<style>

</style>
