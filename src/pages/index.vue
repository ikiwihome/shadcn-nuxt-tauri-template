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
        <AvatarImage src="https://list.ikimi.cc/storage/icons/rAAmIJS2M5RoRK9Etn0pL5W2fV64K97ZPNeEwCm5.png"
          alt="@radix-vue" />
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
        <Label for="terms"
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
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
            <MenubarItem>打印 <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
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
                    <a class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/">
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
                <ListItem v-for="component in components" :key="component.title" :title="component.title"
                  :href="component.href">
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

    <!-- Form 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Form 表单</h2>
      <div class="w-full max-w-sm space-y-4">
        <!-- Form 组件通常用于包裹表单元素 -->
        <Form>
          <!-- 这里可以放置各种表单字段，例如 Input、Checkbox 等 -->
          <div class="space-y-2">
            <Label for="form-name">姓名</Label>
            <Input id="form-name" placeholder="请输入姓名" />
          </div>
          <div class="space-y-2">
            <Label for="form-email">邮箱</Label>
            <Input id="form-email" type="email" placeholder="请输入邮箱" />
          </div>
          <Button type="submit">提交</Button>
        </Form>
      </div>
    </section>

    <!-- Accordion 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Accordion 手风琴</h2>
      <Accordion type="single" collapsible class="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>这是第一个问题吗？</AccordionTrigger>
          <AccordionContent>
            是的，这是第一个问题的答案。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>这是第二个问题吗？</AccordionTrigger>
          <AccordionContent>
            是的，这是第二个问题的答案。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>这是第三个问题吗？</AccordionTrigger>
          <AccordionContent>
            是的，这是第三个问题的答案。
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    <!-- Alert 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Alert 警告</h2>
      <Alert class="w-full max-w-md">
        <!-- <Terminal class="h-4 w-4" /> -->
        <AlertTitle>提示!</AlertTitle>
        <AlertDescription>
          你可以在这里添加你的警告信息。
        </AlertDescription>
      </Alert>
    </section>

    <!-- Aspect Ratio 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Aspect Ratio 纵横比</h2>
      <AspectRatio :ratio="16 / 9" class="bg-muted w-full max-w-md">
        <!-- 这里可以放置需要保持纵横比的内容，例如图片或视频 -->
        <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb797e09?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer" class="rounded-md object-cover">
      </AspectRatio>
    </section>

    <!-- Breadcrumb 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Breadcrumb 面包屑</h2>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">组件</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>面包屑案例</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </section>

    <!-- Carousel 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Carousel 轮播</h2>
      <!-- Carousel 组件通常需要更复杂的配置和子组件，这里提供一个基本结构 -->
      <Carousel class="relative w-full max-w-xs mx-auto">
        <CarouselContent>
          <CarouselItem v-for="i in 5" :key="i">
            <div class="p-1">
              <Card>
                <CardContent class="flex aspect-square items-center justify-center p-6">
                  <span class="text-4xl font-semibold">{{ i }}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>

    <!-- Collapsible 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Collapsible 可折叠区域</h2>
      <Collapsible v-model:open="isCollapsibleOpen" class="w-full max-w-md space-y-2">
        <CollapsibleTrigger as-child>
          <div class="flex items-center justify-between space-x-4 px-4">
            <h4 class="text-sm font-semibold">
              @radix-vue Stars
            </h4>
            <!-- <CaretSortIcon class="h-4 w-4" /> -->
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent class="space-y-2 px-4">
          <div class="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @radix-vue/accordion
          </div>
          <div class="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @radix-vue/collapsible
          </div>
        </CollapsibleContent>
      </Collapsible>
      <div class="mt-2 text-sm text-gray-500">当前状态：{{ isCollapsibleOpen ? '展开' : '折叠' }}</div>
    </section>

    <!-- Combobox 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Combobox 组合框</h2>
      <!-- Combobox 组件需要状态管理和过滤逻辑，这里提供基本结构 -->
      <!-- 实际使用中，Combobox 需要绑定 value 和 items 数组，并实现过滤功能 -->
      <Combobox>
        <ComboboxTrigger>
          <ComboboxInput placeholder="选择框架..." />
          <!-- <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" /> -->
        </ComboboxTrigger>
        <ComboboxContent>
          <ComboboxEmpty />
          <ComboboxGroup>
            <ComboboxItem value="nuxt">Nuxt.js</ComboboxItem>
            <ComboboxItem value="next">Next.js</ComboboxItem>
            <ComboboxItem value="vue">Vue</ComboboxItem>
            <ComboboxItem value="react">React</ComboboxItem>
          </ComboboxGroup>
        </ComboboxContent>
      </Combobox>
    </section>

    <!-- Command 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Command 命令菜单</h2>
      <Command class="rounded-lg border shadow-md w-full max-w-md">
        <CommandInput placeholder="搜索..." />
        <CommandList>
          <CommandEmpty>无结果。</CommandEmpty>
          <CommandGroup heading="建议">
            <CommandItem value="calendar">日历</CommandItem>
            <CommandItem value="search-emoji">搜索表情符号</CommandItem>
            <CommandItem value="calculator">计算器</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="设置">
            <CommandItem value="profile">个人资料</CommandItem>
            <CommandItem value="mail">邮件</CommandItem>
            <CommandItem value="settings">设置</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </section>

    <!-- Context Menu 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Context Menu 右键菜单</h2>
      <ContextMenu>
        <ContextMenuTrigger
          class="flex h-[150px] w-full max-w-md items-center justify-center rounded-md border border-dashed text-sm">
          右键点击这里
        </ContextMenuTrigger>
        <ContextMenuContent class="w-64">
          <ContextMenuItem inset>
            返回
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset disabled>
            前进
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset>
            重新加载
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>更多工具</ContextMenuSubTrigger>
            <ContextMenuSubContent class="w-48">
              <ContextMenuItem>保存页面为...</ContextMenuItem>
              <ContextMenuItem>创建快捷方式...</ContextMenuItem>
              <ContextMenuItem>开发者工具</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem inset>剪切</ContextMenuItem>
          <ContextMenuItem inset>复制</ContextMenuItem>
          <ContextMenuItem inset>粘贴</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </section>

    <!-- Drawer 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Drawer 抽屉</h2>
      <Drawer>
        <DrawerTrigger as-child>
          <Button variant="outline">打开抽屉</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>你确定吗?</DrawerTitle>
            <DrawerDescription>此操作无法撤消。</DrawerDescription>
          </DrawerHeader>
          <div class="p-4">
            <p>抽屉内容区域。</p>
          </div>
          <DrawerFooter>
            <Button>提交</Button>
            <DrawerClose as-child>
              <Button variant="outline">取消</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </section>

    <!-- Number Field 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Number Field 数字输入框</h2>
      <div class="w-full max-w-xs space-y-2">
        <Label for="number-field">数量</Label>
        <!-- NumberField 组件通常需要绑定 v-model -->
        <NumberField id="number-field" :min="0" :max="10" class="w-full">
          <NumberFieldContent>
            <NumberFieldDecrement />
            <NumberFieldInput />
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
      </div>
    </section>

    <!-- Pagination 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Pagination 分页</h2>
      <Pagination v-slot="{ page }" :total="100" :sibling-count="1" show-edges :default-page="1" :items-per-page="10" v-model:page="currentPage">
        <Pagination.List v-slot="{ items }" class="flex items-center gap-1">
          <PaginationFirst />
          <PaginationPrev />

          <template v-for="(item, index) in items">
            <Pagination.ListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
              <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'">
                {{ item.value }}
              </Button>
            </Pagination.ListItem>
            <PaginationEllipsis v-else :key="item.type" :index="index" />
          </template>

          <PaginationNext />
          <PaginationLast />
        </Pagination.List>
      </Pagination>
    </section>

    <!-- Pin Input 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Pin Input 验证码输入框</h2>
      <!-- PinInput 组件需要绑定 v-model -->
      <PinInput v-model="pinInputValue" :fields="6" class="flex items-center gap-2">
        <PinInputGroup>
          <template v-for="(item, index) in 6" :key="index">
            <PinInputSlot :index="index" />
            <template v-if="index !== 5">
              <div class="h-px w-2 bg-border" />
            </template>
          </template>
        </PinInputGroup>
      </PinInput>
      <div class="mt-2 text-sm text-gray-500">当前值：{{ pinInputValue }}</div>
    </section>

    <!-- Range Calendar 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Range Calendar 范围日历</h2>
      <!-- RangeCalendar 组件需要绑定 v-model -->
      <RangeCalendar v-model="rangeCalendarValue" class="rounded-md border" />
      <div class="mt-2 text-sm text-gray-500">当前选择的日期范围：{{ rangeCalendarValue }}</div>
    </section>

    <!-- Resizable 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Resizable 可调整大小面板</h2>
      <ResizablePanelGroup direction="horizontal" class="min-h-[200px] w-full max-w-md rounded-lg border">
        <ResizablePanel :default-size="50">
          <div class="flex h-[200px] items-center justify-center p-6">
            <span class="font-semibold">面板一</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel :default-size="50">
          <div class="flex h-[200px] items-center justify-center p-6">
            <span class="font-semibold">面板二</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </section>

    <!-- Sheet 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Sheet 侧边抽屉</h2>
      <!-- Sheet 组件与 Dialog 类似，但从屏幕边缘滑出 -->
      <Sheet>
        <SheetTrigger as-child>
          <Button variant="outline">打开侧边抽屉</Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>编辑资料</SheetTitle>
            <SheetDescription>
              在这里修改您的个人资料。完成后点击保存。
            </SheetDescription>
          </SheetHeader>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="sheet-name" class="text-right">
                姓名
              </Label>
              <Input id="sheet-name" value="张三" class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="sheet-username" class="text-right">
                用户名
              </Label>
              <Input id="sheet-username" value="@zhangsan" class="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose as-child>
              <Button type="button" variant="secondary">
                关闭
              </Button>
            </SheetClose>
            <Button type="submit">保存</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </section>

    <!-- Sidebar 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Sidebar 侧边栏</h2>
      <!-- Sidebar 通常是应用布局的一部分，这里提供一个简化的示例 -->
      <div class="flex border rounded-md h-48">
        <div class="w-48 border-r p-4">
          <h3 class="text-lg font-semibold mb-2">导航</h3>
          <ul>
            <li><a href="#" class="block py-1 hover:underline">链接一</a></li>
            <li><a href="#" class="block py-1 hover:underline">链接二</a></li>
            <li><a href="#" class="block py-1 hover:underline">链接三</a></li>
          </ul>
        </div>
        <div class="flex-1 p-4">
          <h3 class="text-lg font-semibold mb-2">主要内容区域</h3>
          <p>这里是主要内容的占位符。</p>
        </div>
      </div>
    </section>

    <!-- Sonner 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Sonner 消息提示</h2>
      <!-- Sonner 通常通过编程方式触发，这里展示一个触发按钮 -->
      <Button @click="showSonner">显示消息提示</Button>
    </section>

    <!-- Stepper 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Stepper 步骤指示器</h2>
      <!-- Stepper 组件通常用于引导用户完成一系列步骤 -->
      <!-- 完整的 Stepper 实现可能需要状态管理和逻辑控制，这里展示基本结构 -->
      <Stepper :steps="[{ label: '第一步' }, { label: '第二步' }, { label: '第三步' }]" class="w-full max-w-md" v-model:current-step="currentStep">
        <StepperItem :step="1" label="第一步">
          <p>这是第一步的内容。</p>
        </StepperItem>
        <StepperItem :step="2" label="第二步">
          <p>这是第二步的内容。</p>
        </StepperItem>
        <StepperItem :step="3" label="第三步">
          <p>这是第三步的内容。</p>
        </StepperItem>
      </Stepper>
      <div class="flex gap-2 mt-4">
        <Button @click="currentStep--" :disabled="currentStep === 1">上一步</Button>
        <Button @click="currentStep++" :disabled="currentStep === 3">下一步</Button>
      </div>
    </section>

    <!-- Tags Input 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Tags Input 标签输入框</h2>
      <!-- TagsInput 组件需要绑定 v-model -->
      <TagsInput v-model="tagsInputValue" class="w-full max-w-md">
        <TagsInputItem v-for="(tag, index) in tagsInputValue" :key="index" :value="tag">
          {{ tag }}
          <TagsInputItemRemove />
        </TagsInputItem>
        <TagsInputInput placeholder="添加标签..." />
      </TagsInput>
      <div class="mt-2 text-sm text-gray-500">当前标签：{{ tagsInputValue.join(', ') }}</div>
    </section>

    <!-- Toggle Group 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Toggle Group 切换按钮组</h2>
      <!-- ToggleGroup 组件需要绑定 v-model -->
      <ToggleGroup v-model="toggleGroupValue" type="multiple">
        <Toggle value="bold">粗体</Toggle>
        <Toggle value="italic">斜体</Toggle>
        <Toggle value="underline">下划线</Toggle>
      </ToggleGroup>
      <div class="mt-2 text-sm text-gray-500">当前选择：{{ toggleGroupValue.join(', ') }}</div>
    </section>

  </div>
  <Toaster />
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
import { ref, h, defineComponent } from 'vue'
import { cn } from '~/lib/utils'
import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert'
import { AspectRatio } from '~/components/ui/aspect-ratio'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '~/components/ui/breadcrumb'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '~/components/ui/carousel'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~/components/ui/collapsible'
import { Combobox, ComboboxAnchor, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxList } from '~/components/ui/combobox'
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '~/components/ui/command'
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuTrigger, ContextMenuSub, ContextMenuSubTrigger, ContextMenuSubContent } from '~/components/ui/context-menu'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '~/components/ui/drawer'
import { NumberField, NumberFieldContent, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from '~/components/ui/number-field'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationFirst,
  PaginationLast
} from '~/components/ui/pagination'
import {
  PinInput,
  PinInputGroup,
  PinInputSlot,
} from '~/components/ui/pin-input'
import { RangeCalendar } from '~/components/ui/range-calendar'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '~/components/ui/resizable'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetClose } from '~/components/ui/sheet'
import { Stepper, StepperItem } from '~/components/ui/stepper'
import { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText } from '~/components/ui/tags-input'
import { ToggleGroup } from '~/components/ui/toggle-group'
import { toast } from 'vue-sonner'
import { Toaster } from 'vue-sonner'

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

// Collapsible 示例状态
const isCollapsibleOpen = ref(false)

// Pin Input 示例状态
const pinInputValue = ref([])
// Range Calendar 示例状态
const rangeCalendarValue = ref()

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

// Sonner 示例方法
function showSonner() {
  toast('这是一个消息提示')
}

// Tags Input 示例状态
const tagsInputValue = ref(['Nuxt', 'Vue'])
// Toggle Group 示例状态
const toggleGroupValue = ref([])

// 当前页码状态
const currentPage = ref(1)

// 当前步骤状态
const currentStep = ref(1)
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
}
</style>
