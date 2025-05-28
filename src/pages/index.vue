<template>
  <div class="container space-y-12 py-8">
    <!-- 按钮组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Button 按钮</h2>
      <div class="flex gap-4 flex-wrap">
        <!-- 主要按钮 -->
        <Button variant="default">主要按钮</Button>
        <!-- 破坏性按钮 -->
        <Button variant="destructive">危险按钮</Button>
        <!-- 轮廓按钮 -->
        <Button variant="outline">轮廓按钮</Button>
        <!-- 次要按钮 -->
        <Button variant="secondary">次要按钮</Button>
        <!-- 幽灵按钮 -->
        <Button variant="ghost">幽灵按钮</Button>
        <!-- 链接按钮 -->
        <Button variant="link">链接按钮</Button>
      </div>
    </section>

    <!-- 输入框组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Input 输入框</h2>
      <div class="flex flex-col gap-2 w-64">
        <Label for="demo-input">用户名</Label>
        <Input id="demo-input" v-model="inputValue" placeholder="请输入用户名" />
      </div>
    </section>

    <!-- 标签组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Label 标签</h2>
      <div class="flex flex-col gap-2">
        <Label>普通标签</Label>
        <Label class="text-red-500">自定义样式标签</Label>
      </div>
    </section>

    <!-- 单选框组组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">RadioGroup 单选框组</h2>
      <RadioGroup v-model="radioValue" class="flex gap-6">
        <RadioGroupItem value="a" id="radio-a" />
        <Label for="radio-a">选项A</Label>
        <RadioGroupItem value="b" id="radio-b" />
        <Label for="radio-b">选项B</Label>
      </RadioGroup>
      <div class="mt-2 text-sm text-gray-500">当前选择：{{ radioValue }}</div>
    </section>

    <!-- 下拉选择组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Select 下拉选择</h2>
      <Select v-model="selectValue">
        <SelectTrigger class="w-48">
          <SelectValue placeholder="请选择" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">苹果</SelectItem>
          <SelectItem value="banana">香蕉</SelectItem>
          <SelectItem value="orange">橙子</SelectItem>
        </SelectContent>
      </Select>
      <div class="mt-2 text-sm text-gray-500">当前选择：{{ selectValue }}</div>
    </section>

    <!-- 开关组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Switch 开关</h2>
      <div class="flex items-center gap-4">
        <Switch v-model="switchValue" />
        <span>{{ switchValue ? '开' : '关' }}</span>
      </div>
    </section>

    <!-- 表格组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Table 表格</h2>
      <Table class="w-full max-w-2xl">
        <TableCaption>示例数据表</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>姓名</TableHead>
            <TableHead>年龄</TableHead>
            <TableHead>城市</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>张三</TableCell>
            <TableCell>28</TableCell>
            <TableCell>北京</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>李四</TableCell>
            <TableCell>32</TableCell>
            <TableCell>上海</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>

    <!-- Tooltip 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Tooltip 提示</h2>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button>鼠标悬停显示提示</Button>
          </TooltipTrigger>
          <TooltipContent>这是一个提示内容</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </section>

    <!-- Alert Dialog 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Alert Dialog 警报对话框</h2>
      <AlertDialog v-model:open="alertDialogOpen">
        <AlertDialogTrigger as-child>
          <Button variant="outline">打开警报对话框</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>确定要这样做吗？</AlertDialogTitle>
            <AlertDialogDescription>
              此操作无法撤消。这将永久删除您的帐户并从我们的服务器中删除您的数据。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>取消</AlertDialogCancel>
            <AlertDialogAction>确定</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>

    <!-- Avatar 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Avatar 头像</h2>
      <Avatar>
        <AvatarImage src="https://list.ikimi.cc/storage/icons/rAAmIJS2M5RoRK9Etn0pL5W2fV64K97ZPNeEwCm5.png" alt="@radix-vue" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </section>

    <!-- Badge 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Badge 徽章</h2>
      <div class="flex gap-2">
        <Badge>默认</Badge>
        <Badge variant="secondary">次要</Badge>
        <Badge variant="destructive">危险</Badge>
        <Badge variant="outline">轮廓</Badge>
      </div>
    </section>

    <!-- Calendar 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Calendar 日历</h2>
      <Calendar />
    </section>

    <!-- Card 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Card 卡片</h2>
      <Card class="w-[350px]">
        <CardHeader>
          <CardTitle>卡片标题</CardTitle>
          <CardDescription>卡片描述。</CardDescription>
        </CardHeader>
        <CardContent>
          <p>卡片内容区域。</p>
        </CardContent>
        <CardFooter>
          <p>卡片底部区域。</p>
        </CardFooter>
      </Card>
    </section>

    <!-- Checkbox 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Checkbox 复选框</h2>
      <div class="flex items-center space-x-2">
        <Checkbox id="terms" v-model:checked="checkboxChecked" />
        <Label
          for="terms"
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          接受条款和条件
        </Label>
      </div>
      <div class="mt-2 text-sm text-gray-500">当前状态：{{ checkboxChecked ? '选中' : '未选中' }}</div>
    </section>

    <!-- Dialog 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Dialog 对话框</h2>
      <Dialog v-model:open="dialogOpen">
        <DialogTrigger as-child>
          <Button variant="outline">打开对话框</Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>编辑资料</DialogTitle>
            <DialogDescription>
              在这里修改您的个人资料。完成后点击保存。
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="name" class="text-right">
                姓名
              </Label>
              <Input id="name" value="张三" class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="username" class="text-right">
                用户名
              </Label>
              <Input id="username" value="@zhangsan" class="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose as-child>
              <Button type="button" variant="secondary">
                关闭
              </Button>
            </DialogClose>
            <Button type="submit">保存</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>

    <!-- Dropdown Menu 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Dropdown Menu 下拉菜单</h2>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline">打开菜单</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
          <DropdownMenuLabel>我的帐户</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>个人资料</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>设置</span>
            <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <span>新团队</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>支持</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <span>API</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>退出</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </section>

    <!-- Hover Card 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Hover Card 悬停卡片</h2>
      <HoverCard>
        <HoverCardTrigger as-child>
          <Button variant="link">@nextjs</Button>
        </HoverCardTrigger>
        <HoverCardContent class="w-80">
          <div class="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div class="space-y-1">
              <h4 class="text-sm font-semibold">@nextjs</h4>
              <p class="text-sm">
                下一代 Web 开发框架。
              </p>
              <div class="flex items-center pt-2">
                <!-- <CalendarDays class="mr-2 h-4 w-4 opacity-70" /> -->
                <span class="text-xs text-muted-foreground">
                  加入于 2023 年 1 月
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </section>

    <!-- Menubar 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Menubar 菜单栏</h2>
       <Menubar>
        <MenubarMenu>
          <MenubarTrigger>文件</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              新建标签页 <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              新建窗口 <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>新建秘密窗口</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>分享</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>打印 <MenubarShortcut>⌘P</MenubarShortcut></MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>编辑</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              撤销 <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              重做 <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              剪切 <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              复制 <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              粘贴 <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>查看</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>自动换行</MenubarItem>
            <MenubarItem>开发者工具</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>全屏</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>隐藏侧边栏</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </section>

     <!-- Navigation Menu 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Navigation Menu 导航菜单</h2>
      <!-- NavigationMenu 组件结构复杂，此处添加一个基础示例 -->
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>选项一</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li class="row-span-3">
                  <NavigationMenuLink as-child>
                    <a
                      class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <!-- <Icons /> -->
                      <div class="mb-2 mt-4 text-lg font-medium">
                        Nuxt + Shadcn Vue
                      </div>
                      <p class="text-sm leading-tight text-muted-foreground">
                        一个集成了 Nuxt 3、Shadcn Vue 和 Tauri 的模板项目。
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>

                <ListItem href="/docs" title="文档">
                  了解如何开始使用。
                </ListItem>
                <ListItem href="/docs/installation" title="安装">
                  安装和设置说明。
                </ListItem>
                <ListItem href="/docs/primitives" title="基础组件">
                  风格化基础组件。
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>选项二</NavigationMenuTrigger>
            <NavigationMenuContent>
               <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem
                  v-for="component in components"
                  :key="component.title"
                  :title="component.title"
                  :href="component.href"
                >
                  {{ component.description }}
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
           <NavigationMenuItem>
            <NavigationMenuLink href="/docs" :class="navigationMenuTriggerStyle()">
              文档链接
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </section>

    <!-- Popover 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Popover 气泡卡片</h2>
      <Popover>
        <PopoverTrigger as-child>
          <Button variant="outline">打开气泡卡片</Button>
        </PopoverTrigger>
        <PopoverContent class="w-80">
          <div class="grid gap-4">
            <div class="space-y-2">
              <h4 class="font-medium leading-none">尺寸</h4>
              <p class="text-sm text-muted-foreground">
                为元素设置所需的尺寸。
              </p>
            </div>
            <div class="grid gap-2">
              <div class="grid grid-cols-3 items-center gap-4">
                <Label for="width">宽度</Label>
                <Input id="width" default-value="100%" class="col-span-2 h-8" />
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <Label for="max-width">最大宽度</Label>
                <Input id="max-width" default-value="300px" class="col-span-2 h-8" />
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <Label for="height">高度</Label>
                <Input id="height" default-value="25px" class="col-span-2 h-8" />
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <Label for="max-height">最大高度</Label>
                <Input id="max-height" default-value="none" class="col-span-2 h-8" />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </section>

     <!-- Progress 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Progress 进度条</h2>
      <Progress :model-value="75" class="w-[60%]" />
    </section>

    <!-- Scroll Area 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Scroll Area 滚动区域</h2>
       <ScrollArea class="h-[200px] w-[350px] rounded-md border p-4">
        这是一个滚动区域的示例内容。请添加足够多的内容来触发滚动条。
        <p v-for="i in 20" :key="i">内容 {{ i }}</p>
      </ScrollArea>
    </section>

    <!-- Separator 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Separator 分隔符</h2>
      <div class="space-y-1">
        <h4 class="text-sm font-medium leading-none">Radix Primitives</h4>
        <p class="text-sm text-muted-foreground">
          构建高性能、非风格化的组件库。
        </p>
      </div>
      <Separator />
      <div class="flex h-5 items-center space-x-4 text-sm">
        <div>博客</div>
        <Separator orientation="vertical" />
        <div>文档</div>
        <Separator orientation="vertical" />
        <div>源代码</div>
      </div>
    </section>

    <!-- Skeleton 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Skeleton 骨架屏</h2>
      <div class="flex items-center space-x-4">
        <Skeleton class="h-12 w-12 rounded-full" />
        <div class="space-y-2">
          <Skeleton class="h-4 w-[250px]" />
          <Skeleton class="h-4 w-[200px]" />
        </div>
      </div>
    </section>

    <!-- Slider 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Slider 滑块</h2>
       <Slider v-model="sliderValue" :max="100" :step="1" class="w-[60%]" />
       <div class="mt-2 text-sm text-gray-500">当前值：{{ sliderValue[0] }}</div>
    </section>

     <!-- Tabs 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Tabs 标签页</h2>
       <Tabs default-value="account" class="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">帐户</TabsTrigger>
          <TabsTrigger value="password">密码</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          在这里更改您的帐户设置。
        </TabsContent>
        <TabsContent value="password">
          在这里更改您的密码。
        </TabsContent>
      </Tabs>
    </section>

    <!-- Textarea 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Textarea 文本域</h2>
      <Textarea placeholder="请输入文本..." class="w-64" />
    </section>

    <!-- Toggle 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Toggle 切换按钮</h2>
      <div class="flex items-center gap-4">
        <Toggle v-model:pressed="togglePressed">切换</Toggle>
        <span>当前状态：{{ togglePressed ? '按下' : '未按下' }}</span>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
// 导入所有UI组件
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '~/components/ui/select'
import { Switch } from '~/components/ui/switch'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, TableCaption, TableFooter } from '~/components/ui/table'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '~/components/ui/tooltip'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '~/components/ui/alert-dialog'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Badge } from '~/components/ui/badge'
import { Calendar } from '~/components/ui/calendar'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card'
import { Checkbox } from '~/components/ui/checkbox'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from '~/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut
} from '~/components/ui/dropdown-menu'
import { Form } from '~/components/ui/form'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '~/components/ui/hover-card'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from '~/components/ui/menubar'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '~/components/ui/navigation-menu'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover'
import { Progress } from '~/components/ui/progress'
import { ScrollArea } from '~/components/ui/scroll-area'
import { Separator } from '~/components/ui/separator'
import { Skeleton } from '~/components/ui/skeleton'
import { Slider } from '~/components/ui/slider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import { Textarea } from '~/components/ui/textarea'
import { Toggle } from '~/components/ui/toggle'
import { ref, h, defineComponent, watch } from 'vue'
import { cn } from '~/lib/utils'

// 输入框双向绑定
const inputValue = ref('')
// 单选框组双向绑定
const radioValue = ref('a')
// 下拉选择双向绑定
const selectValue = ref('apple')
// 开关双向绑定
const switchValue = ref(false)

// Alert Dialog 示例状态
const alertDialogOpen = ref(false)
// Checkbox 示例状态
const checkboxChecked = ref(false)
// Dialog 示例状态
const dialogOpen = ref(false)
// Slider 示例状态
const sliderValue = ref([50])
// Toggle 示例状态
const togglePressed = ref(false)

// Navigation Menu 示例数据 (需要根据实际组件结构调整)
const components = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      '一个模态对话框，用于提示用户做出决定。',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      '对于显示悬停信息的卡片，当用户将鼠标悬停在触发器上时显示。',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      '显示操作进度的指示器，通常显示已完成的百分比。',
  },
  {
    title: 'Scroll Area',
    href: '/docs/primitives/scroll-area',
    description: '一个可滚动的区域，可以选择显示滚动条。',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      '一组分层的内容区域，其中只有一个可以在任何给定时间可见。',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      '当用户将鼠标悬停在元素上时显示的包含描述性标签的弹出框。',
  },
]

// Navigation Menu ListItem 组件 (Navigation Menu 示例需要用到)
const ListItem = defineComponent({
  // eslint-disable-next-line vue/one-component-per-file
  setup(props, { attrs }) {
    return () => h('li', {
      class: cn(
        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
        attrs.class as string,
      ),
    }, h(NavigationMenuLink, {
      class: 'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
      ...attrs,
    }, [
      h('div', { class: 'text-sm font-medium leading-none' }, props.title as string),
      h('p', { class: 'line-clamp-2 text-sm leading-snug text-muted-foreground' }, props.description as string),
    ]))
  },
  props: {
    title: String,
    description: String,
  },
})
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
}
</style>
