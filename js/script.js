// Functions from David Walsh: http://davidwalsh.name/css-animation-callback
function whichTransitionEndEvent(){
  var t,
      el = document.createElement("fakeelement");

  var transitions = {
    "transition"      : "transitionend",
    "OTransition"     : "oTransitionEnd",
    "MozTransition"   : "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  }

  for (t in transitions){
    if (el.style[t] !== undefined){
      return transitions[t];
    }
  }
}

function whichAnimationEndEvent(){
  var t,
      el = document.createElement("fakeelement");

  var animations = {
    "animation"      : "animationend",
    "OAnimation"     : "oAnimationEnd",
    "MozAnimation"   : "animationend",
    "WebkitAnimation": "webkitAnimationEnd"
  }

  for (t in animations){
    if (el.style[t] !== undefined){
      return animations[t];
    }
  }
}

var startButton = document.querySelector(".start-button");
var terminal = document.querySelector(".terminal");
var introductionContainer = document.querySelector("#introduction-container");
var introductionFadeOverlay = document.querySelector("#introduction-fade-overlay");
var blockContainer = document.querySelector("#block-container");
var logoContainer = document.querySelector("#logo-container");
var transitionEndEvent = whichTransitionEndEvent();
var animationEndEvent = whichAnimationEndEvent();

startButton.addEventListener("click", function() {
  startButton.addEventListener(transitionEndEvent, function() {
    startIntroduction();
  }, {once: true});

  startButton.className += " hide";
});

function startIntroduction() {
  terminal.className += " show";

  setTimeout(function() {
    var firstTerminalLine = "Booting up: ";
    var currentDateString = new Date().toString().split(" ").slice(0, -2).join(" ");
    firstTerminalLine += currentDateString;
    terminal.innerHTML += firstTerminalLine;
  }, 1000);

  setTimeout(function() {
    setupStartupTerminalOutput();
  }, 2200);
}

function setupStartupTerminalOutput() {
  terminal.insertAdjacentHTML("beforeend", "<br>");
  var timesToDuplicate = 2;
  terminalOutputArray = duplicateTerminalLines([], timesToDuplicate);

  runTerminalOutput(terminalOutputArray, 0)
}

function duplicateTerminalLines(outputArray, timesToDuplicate) {
  for (i = 0; i < timesToDuplicate; i++) {
    var clonedTerminalLines = terminalLines.slice(0);
    outputArray = outputArray.concat(clonedTerminalLines);
  }

  return outputArray;
}

function runTerminalOutput(terminalOutputArray, counter) {
  terminal.innerHTML += terminalOutputArray[counter];
  terminal.insertAdjacentHTML("beforeend", "<br>");
  window.scrollTo(0, document.body.scrollHeight);


  if (counter < terminalOutputArray.length - 1) {
    var timeout = Math.floor(Math.random() * 4) + 1;

    setTimeout(function() {
      runTerminalOutput(terminalOutputArray, counter + 1);
    }, timeout);
  }
  else {
    setTimeout(function() {
      terminal.insertAdjacentHTML("beforeend", "<br>");
      terminal.innerHTML += "Welcome to Ganderflock";
      window.scrollTo(0, document.body.scrollHeight);
    }, 1000);

    setTimeout(function() {
      introductionFadeOverlay.addEventListener(transitionEndEvent, function() {
        introductionEndFadeStepOne();
      }, {once: true});
      introductionFadeOverlay.className += " transitioning";
    }, 2000)
  }
}

function introductionEndFadeStepOne() {
  introductionContainer.className += " hide";
  blockContainer.className = "";
  logoContainer.className = "";

  setTimeout(function() {
    introductionFadeOverlay.className = "";
  }, 1000);
}

var terminalLines = [
  "Using open_ethernet device",
  "TFTP from server 192.168.11.55; our IP address is 192.168.11.105",
  "Load address: 0xd2000000",
  "Bytes transferred = 1161826 (11ba62 hex)",
  "Automatic boot of image at addr 0xD2000000 ...",
  "Image Name:   Linux-2.6.29-rc7",
  "Data Size:    1161762 Bytes =  1.1 MB",
  "Load Address: d0001000",
  "Entry Point:  d0001000",
  "Verifying Checksum ... OK",
  "Uncompressing Kernel Image ... OK",
  "MEMORY:          tag:0x1003, type:0X1000, start:0X0, end:0X6000000",
  "COMMAND_LINE:    tag:0x1001, size:188, data:'console=ttyS0,38400",
  "SERIAL_BAUDRATE: tag:0x1004, size:4, baudrate:38400",
  "parse_bootparam: Ignoring tag 0x1004",
  "lx60 platform_init(bootparams:d5f50000)",
  "lx60 platform_setup(cmdline[0]:'console=ttyS0,38400",
  "smp_init_cpus: Core Count = 3",
  "smp_init_cpus: Core Id = 9320",
  "On node 0 totalpages: 24576",
  "free_area_init_node: node 0, pgdat d0196540, node_mem_map d01fa000",
  "Normal zone: 216 pages used for memmap",
  "Normal zone: 24360 pages, LIFO batch:3",
  "smp_prepare_boot_cpu:",
  "Built 1 zonelists in Zone order, mobility grouping on.  Total pages: 24360",
  "Kernel command line: console=ttyS0,38400 ip=192.168.11.105:192.168.11.55:192.168.11.1:255.255.255.0:",
  "trap_init 0",
  "PID hash table entries: 512 (order: 9, 2048 bytes)",
  "time_init: Platform Calibrating CPU frequency",
  "time_init: ccount_per_jiffy:416777 [41.67 MHz], nsec_per_ccount:23",
  "Console: colour dummy device 80x25",
  "console [ttyS0] enabled",
  "Dentry cache hash table entries: 16384 (order: 4, 65536 bytes)",
  "Inode-cache hash table entries: 8192 (order: 3, 32768 bytes)",
  "Memory: 95196k/98304k available (1229k kernel code, 3040k reserved, 28k data, 72k init 0k highmem)",
  "Calibrating delay loop... 41.26 BogoMIPS (lpj=206336)",
  "Mount-cache hash table entries: 512",
  "cpu 1 fffd",
  "secondary_trap_init 1",
  "Calibrating delay loop... 41.67 BogoMIPS (lpj=208384)",
  "secondary_irq_init: set cached_irq_mask and enable interrupts))",
  "secondary_time_init()",
  "secondary_irq_enable(intrnum:6): cpu:1, INTENABLE:7c",
  "secondary_irq_enable(intrnum:0): cpu:1, INTENABLE:7d",
  "cpu 2 fff9",
  "secondary_trap_init 2",
  "Calibrating delay loop... 41.57 BogoMIPS (lpj=207872)",
  "secondary_irq_init: set cached_irq_mask and enable interrupts))",
  "secondary_time_init()",
  "secondary_irq_enable(intrnum:6): cpu:2, INTENABLE:7c",
  "secondary_irq_enable(intrnum:0): cpu:2, INTENABLE:7d",
  "Brought up 3 CPUs",
  "smp_cpus_done:",
  "net_namespace: 304 bytes",
  "NET: Registered protocol family 16",
  "lx60_init()",
  "bio: create slab <bio-0> at 0",
  "NET: Registered protocol family 2",
  "IP route cache hash table entries: 1024 (order: 0, 4096 bytes)",
  "TCP established hash table entries: 4096 (order: 3, 32768 bytes)",
  "TCP bind hash table entries: 4096 (order: 3, 32768 bytes)",
  "TCP: Hash tables configured (established 4096 bind 4096)",
  "TCP reno registered",
  "NET: Registered protocol family 1",
  "msgmni has been set to 186",
  "alg: No test for md5 (md5-generic)",
  "alg: No test for des (des-generic)",
  "alg: No test for des3_ede (des3_ede-generic)",
  "alg: No test for stdrng (krng)",
  "io scheduler noop registered (default)",
  "Serial: 8250/16550 driver, 4 ports, IRQ sharing disabled",
  "serial8250: ttyS0 at MMIO 0x0 (irq = 3) is a 16550A",
  "oeth_probe: {",
  "oeth_setup: Open Ethernet Core Version 1.0.1",
  ": oeth_setup: Found id1:2000, id2:5c30 at phy_id:3.",
  ": Hardware MAC Address: 00:55:c1:13:6f:0f",
  "eth0 (): not using net_device_ops yet",
  "oeth_probe: }",
  "mice: PS/2 mouse device common for all mice",
  "TCP cubic registered",
  "NET: Registered protocol family 17",
  "RPC: Registered udp transport module.",
  "RPC: Registered tcp transport module.",
  "oeth_open:  Ready to process packets now on dev->name:'eth0', dev:d597d800;",
  "IP-Config: Complete:",
  "device=eth0, addr=192.168.11.105, mask=255.255.255.0, gw=192.168.11.1,",
  "host=\"HiFi-2 Demo\", domain=, nis-domain=(none),",
  "bootserver=192.168.11.55, rootserver=192.168.11.55, rootpath=",
  "Looking up port of RPC 100003/2 on 192.168.11.55",
  "Looking up port of RPC 100005/1 on 192.168.11.55",
  "VFS: Mounted root (nfs filesystem) on device 0:11.",
  "Freeing unused kernel memory: 72k freed",
  "Starting portmap: done",
  "Initializing random number generator... done.",
  "Starting network...",
  "ip: RTNETLINK answers: File exists",
  "Starting sshd: OK",
  "Starting NFS statd: done",
  "Starting NFS services: done",
  "Starting NFS daemon: done",
  "Starting NFS mountd: done",
  "Starting domain name daemon: namedwarning: `named' uses 32-bit capabilities (legacy support in use)",
  "Mounting Other NFS Filesystems",
];
